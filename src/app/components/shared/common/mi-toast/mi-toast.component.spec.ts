import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiToastComponent } from './mi-toast.component';

describe('MiToastComponent', () => {
  let component: MiToastComponent;
  let fixture: ComponentFixture<MiToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
