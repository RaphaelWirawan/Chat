import firebase from "firebase";

class Fire {
  constructor() {
    this.init();

    this.observeAuth();
  }

// A way to send messages
get uid() {
  return (firebase.auth().currentUser || {}).uid;
}

get timestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}


send = messages => {
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
  
    const message = {
      text,
      user,
      timestamp: this.timestamp,
    };
    this.append(message);
  }
};

append = message => this.ref.push(message);
// A way to send messages  

  get ref() {
    return firebase.database().ref('messages');
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

 parse = snapshot => {
  
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: _id } = snapshot;

  const timestamp = new Date(numberStamp);

  const message = {
    _id,
    timestamp,
    text,
    user,
  };
 return message;
};

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
