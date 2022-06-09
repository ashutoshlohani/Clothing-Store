import { useState } from 'react';
import {
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPass,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormField = {
   email: '',
   password: '',
};

function SignInForm() {
   const [formField, setFormField] = useState(defaultFormField);
   const { email, password } = formField;

   async function signInWithGoogle() {
      await signInWithGooglePopup();
   }

   function resetFormField() {
      setFormField(defaultFormField);
   }

   async function handleSubmit(e) {
      e.preventDefault();

      try {
         await signInAuthUserWithEmailAndPass(email, password);
         resetFormField();
      } catch (error) {
         if (error.code === 'auth/wrong-password') {
            alert('Wrong password! Please try again.');
         } else if (error.code === 'auth/user-not-found') {
            alert('User not found! Please try again with valid credentials.');
         }
      }
   }

   function handleChange(e) {
      const { name, value } = e.target;
      setFormField({ ...formField, [name]: value });
   }

   return (
      <div className='sign-up-container'>
         <h2>Already have an account!</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
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

            <div className='buttons-container'>
               <Button type='submit'>Sign In</Button>
               <Button type='button' onClick={signInWithGoogle} buttonType='google'>
                  Google Sign In
               </Button>
            </div>
         </form>
      </div>
   );
}

export default SignInForm;
