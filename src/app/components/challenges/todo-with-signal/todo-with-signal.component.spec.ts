import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithSignalComponent } from './todo-with-signal.component';

describe('TodoWithSignalComponent', () => {
  let component: TodoWithSignalComponent;
  let fixture: ComponentFixture<TodoWithSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoWithSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoWithSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
