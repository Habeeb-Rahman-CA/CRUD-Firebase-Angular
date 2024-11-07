import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { IStudent } from '../../model/student';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.getAllStudent()
  }

  studentList: IStudent[] = []
  studentObj: IStudent = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  }

  id: string = ''
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  mobile: string = ''

  auth = inject(AuthService)
  data = inject(DataService)

  // logout() {
  //   this.auth.logout()
  // }

  resetForm() {
    this.id = '',
      this.firstName = '',
      this.lastName = '',
      this.email = '',
      this.mobile = ''
  }

  getAllStudent() {
    this.data.getAllStudent().then((students: IStudent[]) => {
      this.studentList = students
    })
  }

  addStudent() {
    if (this.firstName == '' || this.lastName == '' || this.email == '' || this.mobile == '') {
      alert('fill in the blanks')
      return
    }

    this.studentObj.id = ''
    this.studentObj.firstName = this.firstName
    this.studentObj.lastName = this.lastName
    this.studentObj.email = this.email
    this.studentObj.mobile = this.mobile

    this.data.addStudent(this.studentObj)
    this.resetForm()
    this.getAllStudent()
  }

  deleteStudent(id: string) {
    if (window.confirm('Are you want to delete' + this.studentObj.firstName))
      this.data.deleteStudent(id)
    this.getAllStudent()
  }

  updateStudent(student: IStudent) {
    this.firstName = student.firstName,
    this.lastName = student.lastName,
    this.email = student.email,
    this.mobile = student.mobile

    this.data.updateStudent(student.id, student)
  }

}
