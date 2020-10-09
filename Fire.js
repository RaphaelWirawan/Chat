import firebase from "firebase";

class Fire {
  constructor() {
    this.init();

    this.observeAuth();
  }

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyCYFRvwmcoGBfbQOo7jOfwNuoxtw0CFyfA",
      authDomain: "chat-3ba97.firebaseapp.com",
      databaseURL: "https://chat-3ba97.firebaseio.com",
      projectId: "chat-3ba97",
      storageBucket: "chat-3ba97.appspot.com",
      messagingSenderId: "576325407209",
      appId: "1:576325407209:web:b05855e437f78cdced7b78",
      measurementId: "G-Y65LP53FFJ",
    });
}

//Fire.shared = new Fire();
//export default Fire;
