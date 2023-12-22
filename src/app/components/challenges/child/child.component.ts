import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterModule,Child1Component,Child2Component],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

}
