import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAyys4mJ-UGrxwFnCVcc6XoCxjvfo_vINw",
	authDomain: "twitter-clone-83a92.firebaseapp.com",
	databaseURL: "https://twitter-clone-83a92-default-rtdb.firebaseio.com",
	projectId: "twitter-clone-83a92",
	storageBucket: "twitter-clone-83a92.appspot.com",
	messagingSenderId: "216378821153",
	appId: "1:216378821153:web:9b38e2884d4e197a4a3160",
	measurementId: "G-M0PJYQ8WS8"
      };
      
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      
      const db = firebaseApp.firestore();
      
export default db;