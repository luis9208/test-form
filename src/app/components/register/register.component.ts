import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService,
    private snackBar: MatSnackBar, private router: Router) {
    this.formRegister = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.validate_password()) {
      this.error('Por vafor verifique la contrasena');
      this.formRegister.controls['password'].setValidators;
      this.formRegister.controls['confirm_password'].setValidators;
    }
    this.auth.register(this.formRegister.value).subscribe(
      {
        next: (data: any) => {
          this.success(data.message);

        },
        error: (dataError: any) => {
          this.error(dataError.error.message);
        }
      }
    );
  }

  /**
   * Verifica que los campos contrasena sean 
   * iguales
   * @returns boolean
   */
  validate_password() {
    const pwd = this.formRegister.value.password;
    const confirm_pwd = this.formRegister.value.confirm_password;
    return pwd == confirm_pwd;
  }

  /**
   * Mensaje de error
   * @param msg 
   */
  error(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['alert', 'alert-danger']
    });
  }

  /**
   * Mensaje de success
   * @param msg 
   */
  success(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['alert', 'alert-success']
    });
  }

}
