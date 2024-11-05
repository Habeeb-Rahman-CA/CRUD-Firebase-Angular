import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  auth = inject(AuthService)

  login() {
    if (this.email == '') {
      alert('Please enter email')
      return
    }
    if (this.password == '') {
      alert('Please enter password')
      return
    }

    this.auth.login(this.email, this.password)
    this.email = ''
    this.password = ''
  }

  signInWithGoogle(){
    this.auth.signInWithGoogle()
  }
}
