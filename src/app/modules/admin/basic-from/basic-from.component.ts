import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-basic-from',
  templateUrl: './basic-from.component.html',
  styleUrls: ['./basic-from.component.scss']
})
export class BasicFromComponent implements OnInit {

  form: FormGroup;
  /*form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(),
    phone: new FormControl(),
    color: new FormControl('#000'),
    date: new FormControl(),
    dateTime: new FormControl(),
    dateTimeLocal: new FormControl(),
    time: new FormControl(),
    month: new FormControl(),
    week: new FormControl(),
    age: new FormControl(),
    file: new FormControl(),
    image: new FormControl(),
    url: new FormControl(),
    range: new FormControl(),
    description: new FormControl(),
    check: new FormControl(),
    password: new FormControl(),
    search: new FormControl(),
    category-form: new FormControl(),
    tag: new FormControl(),
    gender: new FormControl('')
  });*/



  constructor(private formBuilder: FormBuilder) { this.buildForm(); }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
    /*this.form.valueChanges.subscribe(value => console.log(value));*/
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]],
        last: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: [],
      date: [],
      dateTime: [],
      dateTimeLocal: [],
      time: [],
      month: [],
      week: [],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      file: [],
      image: [],
      url: [],
      range: [],
      description: [],
      check: [false,[Validators.requiredTrue]],
      password: [],
      search: [],
      category: [],
      tag: [],
      gender: []
    })
  }

  save($event) {
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }

  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isValidNameField() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isValidLastField() {
    return this.lastField.touched && this.lastField.valid;
  }
  get isInValidNameField() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get isInValidLastField() {
    return this.lastField.touched && this.lastField.invalid;
  }

  get isInValidEmailField() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get isInValidPhoneField() {
    return this.phoneField.touched && this.phoneField.invalid;
  }

  get isInValidAgeField() {
    return this.ageField.touched && this.ageField.invalid;
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get lastField() {
    return this.form.get('fullName.last');
  }

  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get colorField() {
    return this.form.get('color');
  }
  get dateField() {
    return this.form.get('date');
  }
  get dateTimeField() {
    return this.form.get('dateTime');
  }
  get dateTimeLocalField() {
    return this.form.get('dateTimeLocal');
  }
  get timeField() {
    return this.form.get('time');
  }
  get monthField() {
    return this.form.get('month');
  }
  get weekField() {
    return this.form.get('week');
  }
  get ageField() {
    return this.form.get('age');
  }
  get fileField() {
    return this.form.get('file');
  }
  get imageField() {
    return this.form.get('image');
  }
  get urlField() {
    return this.form.get('url');
  }
  get rangeField() {
    return this.form.get('range');
  }
  get descriptionField() {
    return this.form.get('description');
  }
  get passwordField() {
    return this.form.get('password');
  }
  get searchField() {
    return this.form.get('search');
  }
  get categoryField() {
    return this.form.get('category');
  }
  get tagField() {
    return this.form.get('tag');
  }
  get checkField() {
    return this.form.get('check');
  }
  get genderField() {
    return this.form.get('gender');
  }

}
