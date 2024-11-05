import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.css'
})
export class ForgotPassComponent {

  email: string = ''

  auth = inject(AuthService)

  forgotPassword(){
    this.auth.forgotPassword(this.email)
    this.email = ''
  }
}
