const firebaseConfig = {
  apiKey: 'AIzaSyCmpvs730Rr1Pz-zT1IVaJh7SqOttAQ_Dc',
  authDomain: 'todo-fb06b.firebaseapp.com',
  projectId: 'todo-fb06b',
  storageBucket: 'todo-fb06b.appspot.com',
  messagingSenderId: '24719746838',
  appId: '1:24719746838:web:faf8ccb7ef6976b6e89237',
  measurementId: 'G-1FSPZ8H9KQ'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
var db = firebase.firestore()
