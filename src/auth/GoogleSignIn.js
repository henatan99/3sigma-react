import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from './firebase';

const provider = new GoogleAuthProvider();

const googleSignin = () => signInWithPopup(auth, provider);

export default googleSignin;
