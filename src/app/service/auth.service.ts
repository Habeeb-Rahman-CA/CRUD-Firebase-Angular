import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router){}

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      localStorage.setItem("token", 'true')
      this.router.navigate(['dashboard'])
    }, err => {
      alert('user not found')
      this.router.navigate(['login'])
    })
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      this.router.navigate(['login'])
    }, err => {
      alert('something went wrong')
      this.router.navigate(['register'])
    })
  }

  logout() {
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      localStorage.removeItem('token')
    }, err => {
      alert('Logout unsuccessful')
    })
  }

}
