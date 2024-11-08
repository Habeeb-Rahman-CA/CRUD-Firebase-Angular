import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'forgotpassword', component: ForgotPassComponent},
    {path: 'varify-email', component: VarifyEmailComponent}
];
