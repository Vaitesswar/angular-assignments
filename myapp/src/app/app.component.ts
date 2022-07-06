import { Component } from '@angular/core';
import {students} from './students';
import {Student} from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  mystudents = students;
  myIntro(){
    alert("Hey, this is working.");
  }
  onNotify(student: Student){
    alert("Yes you scored good grade, you will email. " + student.name);
  }
  gradeNotify(student: Student){
    alert("Your marks is " + student.marks + ". Hence, your grade is " + this.Grader(student) + ".")
  }
  Grader = function grader(student: Student){
    if (student.marks > 90 && student.marks <= 100){
      return "A";
    } else if (student.marks > 80 && student.marks <= 90){
      return "B";
    } else if (student.marks > 70 && student.marks <= 80){
      return "C";
    } else if (student.marks >= 0 && student.marks <= 70){
      return "Fail";
    } else {
      return "Invalid value."
    }
  }
};
