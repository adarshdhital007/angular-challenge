import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownExampleComponent } from './dropdown-example.component';

describe('DropdownExampleComponent', () => {
  let component: DropdownExampleComponent;
  let fixture: ComponentFixture<DropdownExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
