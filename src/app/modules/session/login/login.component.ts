import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  login(event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password).then( () => {
        this.router.navigate(['./admin']);
      }).catch(() => {
        alert('no es valido');
      });
    }
  }

  get userField() {
    return this.form.get('user');
  }

  get passwordField() {
    return this.form.get('password');
  }

}
