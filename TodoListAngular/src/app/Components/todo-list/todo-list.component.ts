import { Component } from '@angular/core';
import { TaskList } from 'src/app/interface/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  //array de itens da lista do tipo da interface
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("ListaLocalStorage") || '[]');
  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
  }

  /**edita um item da lisata */
  public setEmitTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  /*deletando um item individual */
  public deleteItemTaskList(event: number) {
    const confirm = window.confirm("Tem certeza que deseja Deletar este item ?");
    if (confirm) {
    return this.taskList.splice(event, 1);
    }
    else {
      return null;
    }
  }

  /**deletando todos os itens */
  public deleteAllTaskList() {
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }

  /**Valida os itens individuais da lista na hora da edição */
  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está sem vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
    else {
      alert("SEM DADOS");
    }
  }
}