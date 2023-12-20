import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-with-signal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-with-signal.component.html',
  styleUrls: ['./todo-with-signal.component.scss'],
})
export class TodoWithSignalComponent implements OnInit {
  todos = signal<string[]>([]);
  newItem: string = '';
  id: number = 0;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos.set(JSON.parse(storedTodos));
      }
    } 
  }

  addItem() {
    if (this.newItem.trim() !== '') {
      const updatedTodos = [...this.todos(), this.newItem];
      this.todos.set(updatedTodos);

      // Save updated todos to localStorage
      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      this.newItem = '';
    }
  }

  removeItem(itemToRemove: string) {
    const updatedTodos = this.todos().filter(
      (todo: string) => todo !== itemToRemove
    );
    this.todos.set(updatedTodos);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }
}
