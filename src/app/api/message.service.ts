// message.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, type: 'success' | 'error' = 'success') {
    console.log('message', message, type);
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'snackbar-success' : 'snackbar-error',
    });
  }
}
