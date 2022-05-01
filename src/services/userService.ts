import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import UserAccount from "../models/UserAcount";

export const getUserById = async (
  userID: string
): Promise<UserAccount | null> => {
  try {
    const docQuery = query(collection(db, "users"), where("uid", "==", userID));
    const docSnap = await getDocs(docQuery);
    let result: UserAccount | null = null;
    if (docSnap.docs.length === 0) {
      result = null;
      console.log("getUserByID failed and returned: ", result);
    } else {
      docSnap.forEach((doc) => {
        let retrievedUser = doc.data() as UserAccount;
        result = retrievedUser;
        console.log("getUserByID retrieved: ", result);
      });
    }
    return result;
  } catch (e) {
    console.error("Error retrieving user document: ", e);
    return null;
  }
};

export const createNewUser = async (newUser: UserAccount) => {
  try {
    const docRef = await addDoc(collection(db, "users"), newUser);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
