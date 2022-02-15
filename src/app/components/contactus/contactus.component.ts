import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  formContact: FormGroup;
  email: string;
  constructor(private fb: FormBuilder, private router: Router,
    private snackBar: MatSnackBar, private auth: AuthService) {
    this.email = this.auth.getUser();
    this.formContact = fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      address: ['', Validators.required],
      identification: ['', Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
