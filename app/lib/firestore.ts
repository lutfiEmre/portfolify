import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase"; // Firebase yapılandırma dosyanız

export const getDescription = async (email: string): Promise<string | null> => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().description || null;
    }
    return null;
};

export const saveDescription = async (email: string, description: string) => {
    const docRef = doc(db, "users", email);
    await setDoc(docRef, { description }, { merge: true });
};
