import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(()=> {
      localStorage.setItem("token", 'true')
      this.router.navigate(['dashboard'])
    }, err =>{
      alert('something went wrong')
      this.router.navigate(['login'])
    })
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() =>{
      this.router.navigate(['login'])
    }, err => {
      alert('User not Found')
      this.router.navigate(['register'])
    })
  }

  logout(){
    this.fireAuth.signOut().then(() =>{
      this.router.navigate(['login'])
      localStorage.removeItem('token')
    }, err =>{
      alert('Logout unsuccessful')
    })
  }

}
