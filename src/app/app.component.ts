import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginDirtyComponent } from './components/challenges/login-dirty/login-dirty.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownExampleComponent } from './components/challenges/dropdown-example/dropdown-example.component';
import { CreditCardFormatterComponent } from './components/challenges/credit-card-formatter/credit-card-formatter.component';
import { TodoWithSignalComponent } from './components/challenges/todo-with-signal/todo-with-signal.component';
import { Child1Component } from './components/challenges/child/child-1/child-1.component';
import { Child2Component } from './components/challenges/child/child-2/child-2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    LoginDirtyComponent,
    HttpClientModule,
    TodoWithSignalComponent,
    DropdownExampleComponent,
    CreditCardFormatterComponent,
    Child1Component,Child2Component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-challenge';

  isNavbarOpen = true;
  animationState: string = 'open';

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.animationState = this.isNavbarOpen ? 'open' : 'closed';
  }
  
}
