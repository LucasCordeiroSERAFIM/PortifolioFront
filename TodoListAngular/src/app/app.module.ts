import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
//componentes
import { TodoBotaoDeleteAllComponent } from './Components/todo-botao-delete-all/todo-botao-delete-all.component';
import { TodoInputAddComponent } from './Components/todo-input-add/todo-input-add.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
//páginas
import { HomeComponent } from './Pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoBotaoDeleteAllComponent,
    TodoInputAddComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
