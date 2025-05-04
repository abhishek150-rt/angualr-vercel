import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todoTask: string | null = null;
  todos: { id: number; name: string, src: string }[] = [];
  count: number = 0

  addTask = () => {
    if (this.todoTask?.trim()) {
      const newTask = {
        id: this.todos.length + 1,
        name: this.todoTask,
        src: "https://www.amitree.com/wp-content/uploads/2021/12/what-is-a-task-tracker-and-why-you-need-one.jpeg"
      }
      this.todos = [...this.todos, newTask];
      this.count++

      this.todoTask = null
    }
  }

  removeTask = (id: number) => {
    this.todos = this.todos.filter(val => val.id !== id)
    this.count--
  }
}
