import { useState } from 'react';
import {
   createAuthUserWithEmailAndPass,
   createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormField = {
   name: '',
   email: '',
   password: '',
   confirmPassword: '',
};

function SignUpForm() {
   const [formField, setFormField] = useState(defaultFormField);
   const { name: displayName, email, password, confirmPassword } = formField;

   function resetFormField() {
      setFormField(defaultFormField);
   }

   async function handleSubmit(e) {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert('Passwords do not match');
         return;
      }

      try {
         const { user } = await createAuthUserWithEmailAndPass(email, password);

         await createUserDocFromAuth(user, { displayName });
         resetFormField();
      } catch (error) {
         if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use. Please try again with another email.');
         } else {
            console.error(error);
         }
      }
   }

   function handleChange(e) {
      const { name, value } = e.target;
      setFormField({ ...formField, [name]: value });
   }

   return (
      <div className='sign-up-container'>
         <h2>Don't have an account?</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label='Name'
               type='text'
               name='name'
               value={displayName}
               onChange={handleChange}
               required
            />

            <FormInput
               label='Email'
               type='email'
               name='email'
               value={email}
               onChange={handleChange}
               required
            />

            <FormInput
               label='Password'
               type='password'
               name='password'
               value={password}
               onChange={handleChange}
               required
            />

            <FormInput
               label='Confirm password'
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               onChange={handleChange}
               required
            />

            <Button type='submit'>Sign Up</Button>
         </form>
      </div>
   );
}

export default SignUpForm;
