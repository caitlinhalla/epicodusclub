import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
  providers: [StudentService]
})
export class EditStudentComponent implements OnInit {
  @Input() selectedStudent;

  constructor(private studentService: StudentService) { }

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
