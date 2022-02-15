import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  constructor(private fb: FormBuilder, private _snakBar: MatSnackBar,
    private auth: AuthService, private router: Router) {
    this.loading = true;

    this.form = fb.group(
      {
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {
    this.loading = false;
  }

  onSubmit() {
    this.auth.login(this.form.value).subscribe(
      {
        next: (data) => {
          this.router.navigate(['']);
        },
        error: (data_error) => {
          this.error(data_error.error.message);
        }
      }
    );

  }
  error(msg: string) {
    this._snakBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['alert', 'alert-danger']
    });
  }


}
