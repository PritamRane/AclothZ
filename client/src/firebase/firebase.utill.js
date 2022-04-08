import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDYx0xU8RBZY9hdXRM0FRcdHAziUyFs_c8",
  authDomain: "aclothz.firebaseapp.com",
  projectId: "aclothz",
  storageBucket: "aclothz.appspot.com",
  messagingSenderId: "804039848327",
  appId: "1:804039848327:web:42a5786a9df91717786322",
  measurementId: "G-GWN53LRZMG"
};

// config firebase key
const privateConfig = process.env.REACT_APP_FIREBASE_CONFIG_STRINGIFY;
let firebaseConfig = config;

if (privateConfig) {
  firebaseConfig = JSON.parse(privateConfig);
}
firebase.initializeApp(firebaseConfig);



// auth google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

//#region createUserProfileDocument fn
/**
 * Create new user document to user collection at firestore
 * @param  {String} userAuth user data from firebase
 * @param  {Object} additionalData other data to add
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createDate = new Date();
    try {
      userRef.set({
        email,
        displayName,
        createDate,
        ...additionalData
      });
    } catch (error) {
      console.log("createUserProfileDoccument is error", error.message);
    }
  }
  return userRef;
};
//#endregion

//#region addCollectionAndDocument fn
/**
 * Add Collection to firebase
 * @param {String} collectionKey The key for colection
 * @param {Array} objectItems The collection and items to add
 */
export const addCollectionAndDocument = async (
  collectionKey,
  objectItems = []
) => {
  // find collection by Key
  const collectionRef = firestore.collection(collectionKey);
  //const batch = firestore.batch();
  console.log(collectionRef);
  //objectItems.forEach(item => {
    // create new document with uniqueid
    //const doc = collectionRef.doc();
    //batch.set(doc, { title: item.title, items: item.items });
 // });

  //await batch.commit();
};
//#endregion

/**
 * Convert Collections snapshot from firebase to array
 * @param {Object} collections Oject collections snapshot from firestore
 */
export const convertCollectionsToSnapshot = collections => {
  const collectionsSnapshot = collections.docs.map(document => {
    const { title, items } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items
    };
  });

  // map array to hash table
  return collectionsSnapshot.reduce((accumulator, currentValue) => {
    accumulator[currentValue.title.toLowerCase()] = currentValue;
    return accumulator;
  }, {});
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
