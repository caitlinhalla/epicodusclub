import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  providers: [StudentService]
})
export class StudentDetailComponent implements OnInit {
  studentId: string;
  studentToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private studentService: StudentService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.studentId = urlParameters['id'];
   });
   this.studentToDisplay = this.studentService.getStudentById(this.studentId);
  }

}
