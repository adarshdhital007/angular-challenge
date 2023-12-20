import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginDirtyComponent } from './components/challenges/login-dirty/login-dirty.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownExampleComponent } from './components/challenges/dropdown-example/dropdown-example.component';
import { CreditCardFormatterComponent } from './components/challenges/credit-card-formatter/credit-card-formatter.component';
import { TodoWithSignalComponent } from './components/challenges/todo-with-signal/todo-with-signal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginDirtyComponent,
    HttpClientModule,
    TodoWithSignalComponent,
    DropdownExampleComponent,
    CreditCardFormatterComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
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
