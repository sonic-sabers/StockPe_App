import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import {GoogleSignin} from '@react-native-community/google-signin';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './FirebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


const Registration = async (fullName, email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      fullName: fullName,
    });
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
};

const signUp = (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      const {uid} = cred.user;
      auth().currentUser.updateProfile({
        displayName: fullName,
      });
      // firestore().collection('users').doc(uid).set({
      //   email: email,
      //   displayName: fullName,
      // });
      return uid;
    })
    .then(uid => createUserInDb(uid, fullName, email))
    .catch(err => Alert.alert(err.code, err.message));
};

const createUserInDb = (uid, fullName, email) => {
  return firestore().collection('users').doc(uid).set({
    uid,
    fullName,
    email,
  });
};
const UpdateUserInDb = (uid, age) => {
  return firestore().collection('users').doc(uid).update({
    // uid,
    age,
  });
};

const signIn = (email, password) => {
  if (!email || !password||email.length<5||password.length<5) {
    alert('Error', 'Please enter all fields');
  }

  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

const forgetPassword = email => {
  if (!email) {
    Alert.alert('Error', 'Please enter email');
  }

  return auth().sendPasswordResetEmail(email);
};

const signOut = () => {
  return auth().signOut();
};


const sendOtp = number => {
  if (!number) {
    Alert.alert('Error', 'Please Enter number');
  }

  return auth().signInWithPhoneNumber(number);
};

const confirmCode = (state, code) => {
  return state
    .confirm(code)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

export default Auth = {
  signUp,
  signIn,
  forgetPassword,
  signOut,
  UpdateUserInDb,
  Registration,
  sendOtp,
  confirmCode,
};

// export default Auth;
