import { firestoreDb } from "./index";
import { createAdapterProductFromFirestore } from "../../adapters/productAdapter";
import {
 getDocs,
 query,
 collection,
 where
} from "firebase/firestore";

export const getProducts = (categoryId) => {
 return new Promise((resolve, reject) => {
  const collectionRef = categoryId
   ? query(collection(firestoreDb, 'artworks'), where('category', '==', categoryId))
   : collection(firestoreDb, 'artworks')

  getDocs(collectionRef)
   .then(response => {
    const products = response.docs.map(doc => {
     return createAdapterProductFromFirestore(doc)
    })
    resolve(products)
   })
   .catch(error => {
    reject(error)
   })
 })
}
