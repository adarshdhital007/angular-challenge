import { Routes } from '@angular/router';
import { TodoWithSignalComponent } from './components/challenges/todo-with-signal/todo-with-signal.component';
import { LoginDirtyComponent } from './components/challenges/login-dirty/login-dirty.component';
import { CreditCardFormatterComponent } from './components/challenges/credit-card-formatter/credit-card-formatter.component';
import { DropdownExampleComponent } from './components/challenges/dropdown-example/dropdown-example.component';
import { MiToastComponent } from './components/shared/common/mi-toast/mi-toast.component';
import { DepositCalculatorComponent } from './components/challenges/deposit-calculator/deposit-calculator.component';

export const routes: Routes = [
  { path: '', component: LoginDirtyComponent },
  { path: 'dirty-checker', component: LoginDirtyComponent },
  { path: 'todo-with-signal', component: TodoWithSignalComponent },
  { path: 'credit-card-formatter', component: CreditCardFormatterComponent },
  { path: 'drop-down', component: DropdownExampleComponent },
  { path: 'toast', component: MiToastComponent },
  { path: 'deposit', component: DepositCalculatorComponent },

  {
    path: 'child',
    loadChildren: () =>
      import('./components/challenges/child/child.routing').then(
        (m) => m.routes
      ),
  },
];
