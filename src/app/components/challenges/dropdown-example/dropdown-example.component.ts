import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-example.component.html',
  styleUrl: './dropdown-example.component.scss',
})
export class DropdownExampleComponent {
  lang = [ 
    { name: "HTML" }, 
    { name: "React" }, 
    { name: "Angular" }, 
    { name: "Bootstrap" }, 
    { name: "PrimeNG" }, 
  ]; 
}
