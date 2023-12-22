import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mi-toast',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './mi-toast.component.html',
  styleUrl: './mi-toast.component.scss',
  providers: [MessageService],
})
export class MiToastComponent {
  constructor(private messageService: MessageService) {}

  successShow() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Success Message',
    });
  }

  invalidShow() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Error Message',
    });
  }
}
