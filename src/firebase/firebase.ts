// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { AppUser } from "../redux/userSlice";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd7NGMCAAMSHyLBzm3oRS4G_XT0AC8vpA",
  authDomain: "fitness-app-982b9.firebaseapp.com",
  projectId: "fitness-app-982b9",
  storageBucket: "fitness-app-982b9.appspot.com",
  messagingSenderId: "19540721919",
  appId: "1:19540721919:web:304798a3b30a78670f0cca",
  measurementId: "G-BCG0QL713H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Sign In configuration
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

// Creating user doc from sign up
export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation?: object
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<AppUser | null> => {
  if (!email || !password) return null;

  // return await signInWithEmailAndPassword(auth, email, password);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  if (!user) return null;

  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    // Merge the Firestore user data with Firebase Auth user data
    const userData = userSnapshot.data();
    return {
      ...user,
      displayName: userData?.displayName || user.displayName,
      // You can also merge other fields here if needed
    };
  } else {
    // User doesn't have a Firestore document, return just the Firebase Auth user
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
  }
};

export const signOutUser = async () => await signOut(auth);
