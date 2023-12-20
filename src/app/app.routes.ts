import { Routes } from '@angular/router';
import { TodoWithSignalComponent } from './components/challenges/todo-with-signal/todo-with-signal.component';
import { LoginDirtyComponent } from './components/challenges/login-dirty/login-dirty.component';
import { CreditCardFormatterComponent } from './components/challenges/credit-card-formatter/credit-card-formatter.component';
import { DropdownExampleComponent } from './components/challenges/dropdown-example/dropdown-example.component';

export const routes: Routes = [

  { path: '', component: LoginDirtyComponent },
  { path: 'dirty-checker', component: LoginDirtyComponent },
  { path: 'todo-with-signal', component: TodoWithSignalComponent },
  { path: 'credit-card-formatter', component: CreditCardFormatterComponent },
  { path: 'drop-down', component: DropdownExampleComponent },
];
