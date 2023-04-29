import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-to-do-creator',
  templateUrl: './to-do-creator.component.html',
  styleUrls: ['./to-do-creator.component.scss']
})
export class ToDoCreatorComponent {
  @Output() taskCreated = new EventEmitter<Task>()
  @ViewChild('titleInput',{static:true}) titleInput:ElementRef
  @ViewChild('descriptionInput',{static:true}) descriptionInput:ElementRef
 
  newTask:Task
  


  onSubmit(){
   this.newTask = new Task(Date.now().toString(),
   this.titleInput.nativeElement.value,
   this.descriptionInput.nativeElement.value,
   false)
   this.taskCreated.emit(this.newTask)
  }
}
