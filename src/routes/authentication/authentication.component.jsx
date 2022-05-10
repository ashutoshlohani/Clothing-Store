import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';

const Authentication = () => {
   return (
      <div className='auth-container'>
         <SignInForm />
         <SignUpForm />
      </div>
   );
};

export default Authentication;

// 📝 Implementation of SignIn with redirect
// 📝 Only using sign in with popup so don't need this redirect

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// 🔥 getRedirectResult returns a UserCredential from the redirect-based sign-in flow.
// 🔥 If sign-in succeeded, returns the signed in user.
// 🔥 If sign-in was unsuccessful, fails with an error.
// 🔥 If no redirect operation was called, returns a UserCredential with a null User.

// import {
//    auth,
//    createUserDocFromAuth,
//    signInWithGoogleRedirect,
// } from '../../utils/firebase/firebase.utils';

// 🔥 Auth keep tracks of the user's authentication state also while redirecting

// useEffect(() => {
//    async function fetchData() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//          createUserDocFromAuth(response.user);
//       }
//    }
//    fetchData();
// }, []);

// 🔥 signInWithGoogleRedirect is a method that redirects the user to the Google sign-in page.
// 🔥 When the user is redirected back to app, call getRedirectResult uses Auth to complete the sign-in flow.

// <button onClick={signInWithGoogleRedirect}>Sign In with Google redirect</button>
