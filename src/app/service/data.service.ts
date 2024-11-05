import { Injectable } from '@angular/core';
import { IStudent } from '../model/student';
import { db } from '../config/firebase';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studentRef = (collection(db, 'students'))

  constructor() { }

  async getAllStudent(){
    const snapshot = await getDocs(this.studentRef)
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()} as IStudent))
  }

  addStudent(student: IStudent){
    const newDocRef = doc(this.studentRef)
    student.id = newDocRef.id
    return setDoc(newDocRef, student)
  }
 
  deleteStudent(id: string){
    const studentDocRef = doc(this.studentRef, id)
    return deleteDoc(studentDocRef)
  }

  updateStudent(id : string, student: Partial<IStudent>){
    const  studentDocRef = doc(this.studentRef, id)
    return updateDoc(studentDocRef, student)
  }
}
