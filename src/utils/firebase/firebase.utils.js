// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbDi84gUOSETeyTDlhfHiRtynO_cYT4oY',
  authDomain: 'crown-db-558ff.firebaseapp.com',
  projectId: 'crown-db-558ff',
  storageBucket: 'crown-db-558ff.appspot.com',
  messagingSenderId: '658501048079',
  appId: '1:658501048079:web:1a08174dd9e513058a107a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const signInWithUserEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
    return await signInWithEmailAndPassword(auth, email, password);

};
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionlInfo = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionlInfo,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => {
  await signOut(auth)
}
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
