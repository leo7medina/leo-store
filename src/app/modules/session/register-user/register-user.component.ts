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
  showCompany = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => console.log(value));
    this.passwordField.valueChanges.subscribe(value => {
      console.log(this.form);
      console.log(this.form.get('password'));
      console.log(value);
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        MyValidators.validPassword] ],
      confirm: ['', Validators.required ],
      type: ['', Validators.required],
      companyName: ['', Validators.required]
    },
    {
      validators: MyValidators.matchingPasswordValidators
    });
    this.typeField.valueChanges.subscribe(value => {
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
        this.showCompany = true;
      } else {
        this.companyNameField.setValidators(null);
        this.showCompany = false;
      }
      this.companyNameField.updateValueAndValidity();
    })
  }

  getValidatorsPassword() {
    return [

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

  get confirmField() {
    return this.form.get('confirm');
  }
  get typeField() {
    return this.form.get('type');
  }
  get companyNameField() {
    return this.form.get('companyName');
  }
}
