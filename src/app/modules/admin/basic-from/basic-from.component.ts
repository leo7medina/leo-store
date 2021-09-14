import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-from',
  templateUrl: './basic-from.component.html',
  styleUrls: ['./basic-from.component.scss']
})
export class BasicFromComponent implements OnInit {

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl();
  phoneField = new FormControl();
  colorField = new FormControl('#000');
  dateField = new FormControl();
  dateTimeField = new FormControl();
  dateTimeLocalField = new FormControl();
  timeField = new FormControl();
  monthField = new FormControl();
  weekField = new FormControl();
  ageField = new FormControl();
  fileField = new FormControl();
  imageField = new FormControl();
  urlField = new FormControl();
  rangeField = new FormControl();
  descriptionField = new FormControl();
  checkField = new FormControl();
  passwordField = new FormControl();
  searchField = new FormControl();

  categoryField = new FormControl();
  tagField = new FormControl();
  genderField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isValidNameField() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isInValidNameField() {
    return this.nameField.touched && this.nameField.invalid;
  }
}
