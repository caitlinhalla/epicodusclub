import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
  providers: [StudentService]
})
export class EditStudentComponent implements OnInit {
  @Input() selectedStudent;
  form: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'firstname' : ['', Validators.required],
      'lastname' : ['', Validators.required],
      'track' : ['', Validators.required],
      'currentlanguage' : ['', Validators.required],
      'currentlevel' : ['', Validators.pattern('^[0-9]+$')],
      'treehousepoints' : ['', Validators.pattern('^[0-9]+$')]
    })
   }

  ngOnInit() {
  }

  beginUpdatingStudent(studentToUpdate){
    this.studentService.updateStudent(studentToUpdate);
  }

  beginDeletingStudent(studentToDelete){
    if(confirm("Are you sure you want to delete this student?")){
      this.studentService.deleteStudent(studentToDelete);
    }
  }

}
