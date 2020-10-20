import firebase from "firebase";

class Fire {
  constructor() {
    this.init();

    this.observeAuth();
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  parse = snapshot => {
  }

  off() {
    this.ref.off();
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
