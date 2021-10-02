import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

initializeApp(config);

const db = getFirestore();

export const getData = async () => {
  try {
    const docRef = doc(db, 'test_data', 'test-doc-id');
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};
