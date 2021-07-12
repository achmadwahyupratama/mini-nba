import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBPfSP2USxZvIHGfPNvwmUlJTMLj0cSMX4",
  authDomain: "mini-nba-b4e60.firebaseapp.com",
  projectId: "mini-nba-b4e60",
  storageBucket: "mini-nba-b4e60.appspot.com",
  messagingSenderId: "792732800055",
  appId: "1:792732800055:web:0a7c33c60e1fe9bfa0dbb2",
  measurementId: "G-MCPQK77SXR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();