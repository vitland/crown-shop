import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

export const SignIn = () => {
    const logGoogleUsr = async() => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

  return (
    <div>
      <button onClick={logGoogleUsr}>
          sign in
      </button>
    </div>
  );
};
