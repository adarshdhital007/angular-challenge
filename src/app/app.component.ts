import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
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
