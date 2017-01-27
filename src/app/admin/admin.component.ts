import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StudentService]
})
export class AdminComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  submitForm(firstname: string, lastname: string, track: string, currentlanguage: string, currentlevel: string, treehousepoints: number){
    var newStudent: Student = new Student(firstname, lastname, track, currentlanguage, currentlevel, treehousepoints);
    this.studentService.addStudent(newStudent);
  }

}
