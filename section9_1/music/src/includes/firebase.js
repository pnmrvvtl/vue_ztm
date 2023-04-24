import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgL3pgai2M6ibPmkrP0HdmQNbCDLYk6bc',
  authDomain: 'music-74baa.firebaseapp.com',
  projectId: 'music-74baa',
  storageBucket: 'music-74baa.appspot.com',
  appId: '1:162923732523:web:a363972c55a1681a52d46e',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');

export { auth, db, userCollection };
