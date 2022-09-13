
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./firebase-config"

import {getAuth,
     signInWithEmailAndPassword,
     signInWithPopup,
     sendEmailVerification,
     sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    GoogleAuthProvider} 
     from "firebase/auth"



import {getFirestore, doc, getDoc, setDoc, Firestore} from "firebase/firestore"


const app = initializeApp({
    ...firebaseConfig
})

// firestore //

export const firestore = getFirestore(app)
export const createUserProfile = async userAuthenticated => {
    const userReference = doc(firestore, `users/${userAuthenticated.uid}` );

    const snapshot = await getDoc(userReference);

    if(!snapshot.exists()){
        const {name,email,photoURL} = userAuthenticated
        try {
            await setDoc(userReference, {
                name,
                email,
                photoURL,
                createdAt: new Date(),
            });
        } catch (error) {
            console.log(error)
            
        }
    }

    return userReference;
}



// auth //

export const auth = getAuth(app);

//crear usuario//

export const register = async (email, password) => {

    const userCreated = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(Credentials.user, {
        url:"http://localhost:3000/home"});

    alert(`se envio un correo de verificacion a ${email}`)

    localStorage.setItem(Credentials.user);

};

// iniciar sesion con correo y contraseña //
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

//reiniciar contraseña//

export const resetPaswword = async email => {
    await sendPasswordResetEmail(auth, email, {url:"http://localhost:3000/login"})
};

//iniciar con google//
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);