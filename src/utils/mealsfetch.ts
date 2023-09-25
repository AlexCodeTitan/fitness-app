import { doc, collection, getDocs, getFirestore } from "firebase/firestore";

export const db = getFirestore();

export const fetchUserDataAndMeals = async (user: any) => {
  const uid = user.uid;

  if (!uid) {
    console.error("User UID is missing.");
    return;
  }

  const userDocRef = doc(db, "users", uid);
  const mealsRef = collection(userDocRef, "meals");

  try {
    const querySnapshot = await getDocs(mealsRef);

    const meals = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
};
