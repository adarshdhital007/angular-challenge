import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MiToastComponent } from './components/shared/common/mi-toast/mi-toast.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    MiToastComponent
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
