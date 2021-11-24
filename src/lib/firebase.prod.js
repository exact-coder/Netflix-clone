/* eslint-disable import/prefer-default-export */
import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyB_uls--RWmG2seboVMfkldu4o8MbzF4gU',
    authDomain: 'netflix-clone-548cc.firebaseapp.com',
    projectId: 'netflix-clone-548cc',
    storageBucket: 'netflix-clone-548cc.appspot.com',
    messagingSenderId: '823378597210',
    appId: '1:823378597210:web:644970b766834638c20f63',
    measurementId: 'G-5QE4NL4KSW',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
// eslint-disable-next-line prettier/prettier

