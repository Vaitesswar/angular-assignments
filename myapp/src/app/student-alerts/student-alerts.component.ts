//Input and Output is used for sharing data between a parent component and one or more child components.
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Student } from '../students';

@Component({
  selector: 'app-student-alerts',
  templateUrl: './student-alerts.component.html',
  styleUrls: ['./student-alerts.component.css']
})
export class StudentAlertsComponent implements OnInit {
  // @Input > Sending data from parent to child
  // ! > To tell Typescript "I know this is getting initialized to null/undefined but I will take care of it".
  // : > Just the separator between field name and type.
  @Input() student!: Student;

  // @Output > Sending data from child to parent
  // Tells Angular to create a new event emitter to emit data which will be output to parent component.
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
