import {
  and,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";
import {db} from "../firebase/client";

export default function useItemsByCategory(category) {
  const [items, setItems] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
  

    const q = query(
      collection(db, "products"),
      (where("categoryId", "==", category))
    );

    getDocs(q)
      .then((snapshot) => {
        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      })
      .finally(() => [stopLoading()]);
  }, [category, stopLoading]);

  return { items, isLoading };
}
