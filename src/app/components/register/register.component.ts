import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = ''
  password: string = ''

  auth = inject(AuthService)

  register() {
    if (this.email == '') {
      alert('Please enter email')
      return
    }
    if (this.password == '') {
      alert('Please enter password')
      return
    }

    this.auth.register(this.email, this.password)
    this.email = ''
    this.password = ''
  }

  signInWithGoogle(){
    this.auth.signInWithGoogle()
  }
}
