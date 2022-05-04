import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyCw9uS4OdggWCwv9oEMrAu47rKW_iAVg8o',
   authDomain: 'bhuli-store.firebaseapp.com',
   projectId: 'bhuli-store',
   storageBucket: 'bhuli-store.appspot.com',
   messagingSenderId: '138086009932',
   appId: '1:138086009932:web:024a335b5468fbdb8bf8e9',
   measurementId: 'G-LKEXDEYX24',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Using Google as authentication provider and setting custom parameters
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: 'select_account',
});

// Authenitcation of firebase app based on firebase config
// Creating meathod and exporting it to be used in other files (Sign-in.component.jsx)
// Passing auth and provider as an argument
const auth = getAuth(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Creating a reference to the Firebase database
const db = getFirestore();
export const createUserDocFromAuth = async userAuth => {
   // Creating a new user document-refrence and snapshot of ref based on firebase auth user object
   // Firebase auth user object is a reference to the user document in the Firebase database
   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   // If user document does not exist, create a new user document
   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, { displayName, email, createdAt });
      } catch (error) {
         console.error(error.message);
      }
   }

   // If user document exists, return the user document
   return userDocRef;
};
