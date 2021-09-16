import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { MyValidators } from '../../../utils/validators'

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"],
})
export class RegisterUserComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      user: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", this.getValidatorsPassword() ],
      confirm: ['', this.getValidatorsPassword() ]
    },
    {
      validators: MyValidators.matchingPasswordValidators
    });
  }

  getValidatorsPassword() {
    return [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      MyValidators.validPassword
    ]
  }

  register(event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(["/login"]);
      });
    }
  }

  get userField() {
    return this.form.get("user");
  }

  get emailField() {
    return this.form.get("email");
  }

  get passwordField() {
    return this.form.get("password");
  }
}
