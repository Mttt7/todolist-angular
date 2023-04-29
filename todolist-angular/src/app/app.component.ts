import { Component, ComponentFactoryResolver, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  tasks: Task[] = [{id:Date.now().toString(),title:'random',description:'desccc',isDone:false}]
  toDoTasks: Task[] = this.tasks.filter(t=>!t.isDone)
  doneTasks: Task[] = this.tasks.filter(t=>t.isDone)

  nothingToDo:boolean = this.toDoTasks.length===0
  nothingDone:boolean = this.doneTasks.length===0

  addTask(task){
    this.tasks.push(task)
    this.toDoTasks = this.tasks.filter(t=>!t.isDone)
    this.doneTasks= this.tasks.filter(t=>t.isDone)
    this.nothingToDo = this.toDoTasks.length===0
    this.nothingDone = this.doneTasks.length===0
  
  }

  deleteTask(id:string){
    
    console.log(this.doneTasks)
    this.tasks = this.tasks.filter(t => t.id!==id)
    this.doneTasks = this.doneTasks.filter(t => t.id!==id)

    this.toDoTasks = this.tasks.filter(t=>!t.isDone)
    this.doneTasks= this.tasks.filter(t=>t.isDone)

    this.nothingToDo = this.toDoTasks.length===0
    this.nothingDone = this.doneTasks.length===0
   
  }

  markTaskDone(id:string){
    
    this.tasks.find(t => t.id===id).isDone = true
    this.toDoTasks = this.tasks.filter(t=>!t.isDone)
    this.doneTasks= this.tasks.filter(t=>t.isDone)

    this.nothingToDo = this.toDoTasks.length===0
    this.nothingDone = this.doneTasks.length===0
  }

  markTaskUndone(id:string){
    this.doneTasks.find(t => t.id===id).isDone = false

    this.toDoTasks = this.tasks.filter(t=>!t.isDone)
    this.doneTasks= this.tasks.filter(t=>t.isDone)

    this.nothingToDo = this.toDoTasks.length===0
    this.nothingDone = this.doneTasks.length===0

  }


}
