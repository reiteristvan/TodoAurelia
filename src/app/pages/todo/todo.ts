import { Aurelia, inject } from 'aurelia-framework';
import { ITodoItem, TodoService } from '../../services/todoService.ts';

@inject(TodoService)
export class Todo {
    private _todoService: TodoService;
    
    public todoItems: ITodoItem[];
    
    constructor(todoService: TodoService){
        this._todoService = todoService;
    }
    
    activate() : ITodoItem[] {
        this.todoItems = this._todoService.getAll();
        return this.todoItems;
    }
}