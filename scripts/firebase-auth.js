// firebase-auth.js

// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCXNzA7FcCM_BBB4nYXJzFg6X0RVoc7eWA",
  authDomain: "farmlandelectricals.firebaseapp.com",
  databaseURL: "https://farmlandelectricals-default-rtdb.firebaseio.com",
  projectId: "farmlandelectricals",
  storageBucket: "farmlandelectricals.appspot.com",
  messagingSenderId: "577927305361",
  appId: "1:577927305361:web:ab610a87ef2f3b291ec730",
  measurementId: "G-ZV3MXQV74K",
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Firebase Realtime Database
const database = firebase.database();

// Function to handle user login
export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// Function to handle user registration
export function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

// Function to handle user logout
export function logout() {
  return auth.signOut();
}

// Function to check if a user is logged in
export function isUserLoggedIn() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject("User not logged in");
      }
    });
  });
}

// Function to get the current user's data
export function getCurrentUserData() {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      resolve(currentUser);
    } else {
      reject("No user logged in");
    }
  });
}

// Function to save user session data in the Realtime Database
export function saveSessionData(userId, userData) {
  return database.ref(`sessions/${userId}`).set(userData);
}

// Function to retrieve user session data from the Realtime Database
export function getSessionData(userId) {
  return database.ref(`sessions/${userId}`).once('value');
}
