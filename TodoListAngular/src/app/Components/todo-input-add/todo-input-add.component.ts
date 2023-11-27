import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add',
  templateUrl: './todo-input-add.component.html',
  styleUrls: ['./todo-input-add.component.scss']
})
export class TodoInputAddComponent {
  // sempre que acontecer algo  disparar para o  componente de listagem
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    console.log("Dados",this.addItemTaskList)

    if (this.addItemTaskList) {
      /**manda o item para o outro componente */
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  };
}