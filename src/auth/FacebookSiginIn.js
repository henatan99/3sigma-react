import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

import { auth } from './firebase';

const provider = new FacebookAuthProvider();

const facebookSignin = () => signInWithPopup(auth, provider);

export default facebookSignin;
