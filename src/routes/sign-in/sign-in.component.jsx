import { useEffect } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { SignUpForm } from '../../components/sign-up/sign-up-form.component';

export const SignIn = () => {
  useEffect(() => {

    const getRes = async()=> {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getRes();
  }, []);

  const logGoogleUsr = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUsr}>sign in</button>
      <button onClick={signInWithGoogleRedirect}>sign in redirect</button>
      <SignUpForm/>
    </div>
  );
};
