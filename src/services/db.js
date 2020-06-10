import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXBHT_ei4_b-jeAWLYN1Dz8LHigI84wnA",
    authDomain: "feketejanos-fc154.firebaseapp.com",
    databaseURL: "https://feketejanos-fc154.firebaseio.com",
    projectId: "feketejanos-fc154",
    storageBucket: "feketejanos-fc154.appspot.com",
    messagingSenderId: "664186560415",
    appId: "1:664186560415:web:c7c12889881377e3b6e7aa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();