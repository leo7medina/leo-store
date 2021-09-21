import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../../services/categories.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize, subscribeOn} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MyValidators} from '../../../../utils/validators';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-category',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<string>;
  categoryId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService,
    private angularFireStorage: AngularFireStorage,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    /*this.nameField.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.form);
    });*/
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();

      }
    })
  }

  save($event) {
    $event.preventDefault();
    if (this.form.valid) {
      if (this.categoryId) {
        this.updateCategory();
      } else {
        this.createCategory();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    const data = this.form.value;
    this.categoriesService.createCategory(data).subscribe(response => {
      console.log(response);
      if (response) {
        this.router.navigate(['./admin/categories']);
      }
    });
  }

  private updateCategory() {
    const data = this.form.value;
    this.categoriesService.updateCategory(this.categoryId, data).subscribe(rta => {
      this.router.navigate(['/admin/categories']);
    });
  }

  private getCategory() {
    this.categoriesService.getCategory(this.categoryId).subscribe(data => {
      console.log(data);
      this.form.patchValue(data);
      console.log(this.form);
    });

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
