import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDirtyComponent } from './login-dirty.component';

describe('LoginDirtyComponent', () => {
  let component: LoginDirtyComponent;
  let fixture: ComponentFixture<LoginDirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDirtyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
