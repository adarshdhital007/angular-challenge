import { Routes } from '@angular/router';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child.component').then((m) => m.ChildComponent),
    children: [
      { path: 'child-1', component: Child1Component },
      { path: 'child-2', component: Child2Component },
    ],
  },
];
