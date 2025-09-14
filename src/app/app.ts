import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;

}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

todolist: TodoItem[] = [];
newTask : string = '';

addTask(): void{
  if(this.newTask.trim() !== ''){
    const newTodoItem : TodoItem = {
      id : Date.now(),
      task : this.newTask,
      completed : false ,
    }
    this.todolist.push(newTodoItem);
    this.newTask = '';
  }
}
completeTask(todoitem : TodoItem) : void {
todoitem.completed = true ;
}

toggleCompleted(index: number){
  this.todolist[index].completed = !this.todolist[index].completed;
}
DeleteTask(id: number){
  this.todolist = this.todolist.filter(item => item.id !== id)
}
}
