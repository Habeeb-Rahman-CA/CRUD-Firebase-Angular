import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { IStudent } from '../../model/student';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.getAllStudent()
  }

  studentList: IStudent[] = []

  auth = inject(AuthService)
  data = inject(DataService)

  logout(){
    this.auth.logout()
  }

  getAllStudent(){
    this.data.getAllStudent()
  }
}
