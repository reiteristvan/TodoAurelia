
export interface ITodoItem {
    id: number;
    description: string;
    done: boolean;
}

export class TodoService {
    private _todoItems: Array<ITodoItem>;
    
    constructor(){
        this._todoItems = [
          {
              id: 1, description: 'Get shit done', done: false
          },
          {
              id: 1, description: 'Buy milk', done: true
          },
          {
              id: 1, description: 'Finish TodoApp', done: false
          }   
        ];
    }
    
    getAll(){
        return this._todoItems;
    }
}