import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { initializeApp } from '@firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  app: any
  auth: any
  firestore: any
  storage: any

  constructor(private router: Router,) {
    this.app = initializeApp({
      apiKey: "AIzaSyB4ncy09_AxpvKUlYb-rJ6nHF34du0OkiU",
      authDomain: "first-project-63541.firebaseapp.com",
      projectId: "first-project-63541",
      storageBucket: "first-project-63541.firebasestorage.app",
      messagingSenderId: "338181206584",
      appId: "1:338181206584:web:d505734a4ce3da55a1accd"
    })
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      localStorage.setItem("token", 'true')
      this.router.navigate(['dashboard'])
    }, err => {
      alert('user not found')
      this.router.navigate(['login'])
    })
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      this.router.navigate(['login'])
    }, err => {
      alert('something went wrong')
      this.router.navigate(['register'])
    })
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['login'])
      localStorage.removeItem('token')
    }, err => {
      alert('Logout unsuccessful')
    })
  }

}
