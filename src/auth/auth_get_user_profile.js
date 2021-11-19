import { getAuth } from 'firebase/auth';

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const { displayName } = user;
  const { email } = user;
  const { photoURL } = user;
  const { emailVerified } = user;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const { uid } = user;
}
