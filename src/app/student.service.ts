import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class StudentService {
  students: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.students = angularFire.database.list('students');
  }

  getStudents() {
    return this.students;
  }

  getStudentById(studentId: string){
    return this.angularFire.database.object('students/' + studentId);
  }

}
