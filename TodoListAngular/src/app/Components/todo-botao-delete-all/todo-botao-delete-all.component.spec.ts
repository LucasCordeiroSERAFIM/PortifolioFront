import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBotaoDeleteAllComponent } from './todo-botao-delete-all.component';

describe('TodoBotaoDeleteAllComponent', () => {
  let component: TodoBotaoDeleteAllComponent;
  let fixture: ComponentFixture<TodoBotaoDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBotaoDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBotaoDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
