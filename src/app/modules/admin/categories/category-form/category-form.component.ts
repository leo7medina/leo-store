import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../../services/categories.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {finalize, subscribeOn} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MyValidators} from '../../../../utils/validators';
import { v4 as uuidv4} from 'uuid';
import { Category } from '../../../../interfaces/Category'
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<string>;
  isNew = true;

  //@Input() category: Category;
  @Input()
  set category(data: Category) {
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
    }
  }
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService,
    private angularFireStorage: AngularFireStorage,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  save($event) {
    $event.preventDefault();
    if (this.form.valid) {
      if (this.isNew) {
        this.create.emit(this.form.value);
      } else {
        this.update.emit(this.form.value);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  uploadFile($event) {
    const file = $event.target.files[0];
    const name = `${uuidv4()}.png`;
    const ref = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task.snapshotChanges()
      .pipe(
        finalize( () => {
          this.image$ = ref.getDownloadURL();
          this.image$.subscribe(url => {
            this.imageField.setValue(url);
          });
        })
      ).subscribe();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)], MyValidators.validateCategory(this.categoriesService)],
      image: ['', Validators.required],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

}
