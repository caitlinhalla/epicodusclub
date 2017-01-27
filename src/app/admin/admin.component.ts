import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StudentService]
})
export class AdminComponent implements OnInit {
  form: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.form = fb.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required]
    })
   }

  ngOnInit() {
  }

  submitForm(firstname: string, lastname: string, track: string, currentlanguage: string, currentlevel: string, treehousepoints: number){
    var newStudent: Student = new Student(firstname, lastname, track, currentlanguage, currentlevel, treehousepoints);
    this.studentService.addStudent(newStudent);
  }

}
