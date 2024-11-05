import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router){}

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      localStorage.setItem("token", 'true')
      
      if (res.user.emailVerified == true) {
        this.router.navigate(['dashboard'])
      } else {
        this.router.navigate(['varify-email'])
      }
    }, err => {
      alert('user not found')
      this.router.navigate(['login'])
    })
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      this.router.navigate(['login'])
      this.sendEmailVarification(res.user)
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

  forgotPassword(email: string){
    sendPasswordResetEmail(auth, email).then(()=>{
    this.router.navigate(['varify-email'])
    }, err =>{
      alert('Something went wrong')
    })
  }

  sendEmailVarification(user: any){
    sendEmailVerification(user).then(() =>{
      this.router.navigate(['varify-email'])
    }, (err: any) => {
      alert("Not able to sent the mail to your mail")
    })
  }

}
