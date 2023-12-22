import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss'
})
export class Child2Component {

}
