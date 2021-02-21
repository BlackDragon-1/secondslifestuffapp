import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCuMKLx9aPa-3u27OCGfw-UmGOfm7K4jAA",
  authDomain: "oddajrzeczyfirebase.firebaseapp.com",
  projectId: "oddajrzeczyfirebase",
  storageBucket: "oddajrzeczyfirebase.appspot.com",
  messagingSenderId: "1044081681647",
  appId: "1:1044081681647:web:93b715054a5ee30ccd271a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();

const db = firebase.firestore();

    db.collection('users').get().then(snapshot => {
        snapshot.forEach((doc)=>{
            console.log(doc.data());
        })
    
    })
    .catch (e => {
        console.log(e);
    });
 
export default firebase;
  