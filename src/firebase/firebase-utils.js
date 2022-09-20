
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

export const getOrCreateUserProfile = async userAuthenticated => {
    const userReference = doc(firestore, `users/${userAuthenticated.uid}` );

   

    const snapshot = await getDoc(userReference);
   
    if(!snapshot.exists()){
        const {email,photoURL, displayName} = userAuthenticated
        
        try {
            await setDoc(userReference, {
                name: displayName,
                email,
                photoURL,
                createdAt: new Date(),
            });
        } catch (error) {
            console.log({error});
            
        }
    }

    return snapshot;
}



// auth //

export const auth = getAuth(app);

//crear usuario//

export const register = async (email, password) => {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  
    await sendEmailVerification(credentials.user, {
      url: 'http://localhost:3000',
    });
  
    alert(`Se envió un correo de verificación a ${email}`);
    localStorage.setItem('username', credentials.user);
  
    return credentials;
  };
// iniciar sesion con correo y contraseña //
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

//reiniciar contraseña//

export const resetPaswword = async email => {
    await sendPasswordResetEmail(auth, email, {url:"http://localhost:3000/login"})
    alert(`Se envió un correo de recuperación de contraseña a ${email}`);
};

//iniciar con google//
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);