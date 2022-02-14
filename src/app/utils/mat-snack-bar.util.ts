import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MatSnackBarUtil {
    constructor(
        private matSnackBar: MatSnackBar
    ) {
    }

    matSnackBarWarning(message: string) {
        this.matSnackBar.open(message, null, {
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['alert', 'alert-warning']
        });
    }

    matSnackBarSuccess(message: string) {
        this.matSnackBar.open(message, null, {
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['alert', 'alert-success']
        });
    }

    matSnackBarDanger(message: string) {
        this.matSnackBar.open(message, null, {
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['alert', 'alert-danger']
        });
    }
}
