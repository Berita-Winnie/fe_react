import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: 'AIzaSyDdKhRSLTN2Hk_kFBNJKjSSO2AyWB3PWyw',
  authDomain: 'netflix-clone-59e86.firebaseapp.com',
  projectId: 'netflix-clone-59e86',
  storageBucket: 'netflix-clone-59e86.firebasestorage.app',
  messagingSenderId: '276563182851',
  appId: '1:276563182851:web:88f20d4e02f9daa1e49536',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

//Functions

//user signUp function
const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(''))
  }
}

//User logIn function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(''))
  }
}

//LogOut function
const logOut = () => {
  signOut(auth)
}

export { auth, db, login, signUp, logOut }
