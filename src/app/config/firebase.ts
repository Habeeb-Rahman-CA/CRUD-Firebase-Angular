import { initializeApp } from "firebase/app"
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB4ncy09_AxpvKUlYb-rJ6nHF34du0OkiU",
    authDomain: "first-project-63541.firebaseapp.com",
    projectId: "first-project-63541",
    storageBucket: "first-project-63541.firebasestorage.app",
    messagingSenderId: "338181206584",
    appId: "1:338181206584:web:d505734a4ce3da55a1accd"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const fireStore = getFirestore(app)
export const storage = getStorage(app)

