import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.scss'
})
export class Child1Component {

}
