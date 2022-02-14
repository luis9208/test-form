import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarUtil } from '../../utils/mat-snack-bar.util';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService,
    private snackBar: MatSnackBarUtil) {
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
  }

  validate_password() {
    const pwd = this.formRegister.value.password;
    const confirm_pwd = this.formRegister.value.confirm_password;
    return pwd == confirm_pwd;
  }
  error(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }



}
