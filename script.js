// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, doc, updateDoc, increment, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// ✅ Replace with your Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to vote
async function vote(photoId) {
  try {
    const ref = doc(db, "votes", photoId);

    // Ensure document exists
    await setDoc(ref, { count: 0 }, { merge: true });

    // Increment vote
    await updateDoc(ref, {
      count: increment(1)
    });

    alert("Thanks for voting!");
  } catch (error) {
    console.error("Error voting:", error);
  }
}

window.vote = vote; // make available to HTML onclick