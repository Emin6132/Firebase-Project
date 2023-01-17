import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVXUEC5JC68Yzf5N5xUJ3q_Gpo1RK82eU",
    authDomain: "fireblogs-f2050.firebaseapp.com",
    projectId: "fireblogs-f2050",
    storageBucket: "fireblogs-f2050.appspot.com",
    messagingSenderId: "37854688975",
    appId: "1:37854688975:web:272c385f9c6722bccba9ba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { timestamp };
  export default firebaseApp.firestore();