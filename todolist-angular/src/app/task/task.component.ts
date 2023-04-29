import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  @Input() task:Task
  @Output() deleteTask = new EventEmitter<string>()
  @Output() finishTask = new EventEmitter<string>()
  @Output() unDoneTask = new EventEmitter<string>()

  


  onDeleteButton(e){
    this.deleteTask.emit(e.target.parentNode.parentNode.id)
      
  }

  onDoneButton(e){
    this.finishTask.emit(e.target.parentNode.parentNode.id)
    
  }
  onUnDoneButton(e){
    this.unDoneTask.emit(e.target.parentNode.parentNode.id)
  }


  ngOnInit(){
    
  }
}
