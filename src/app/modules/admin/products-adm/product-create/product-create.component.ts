import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { MyValidators} from '../../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../../../services/categories.service'
import { response } from 'express'
import { Category } from '../../../../interfaces/Category'

@Component({
  selector: 'app-form-product',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.gerCategories();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, MyValidators.isPriceValue]],
      image: ['', Validators.required],
      category_id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      stock: [100, [Validators.required]]
    });
    this.form.get('stock').valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  saveProduct(event) {
    event.preventDefault();//evita recarga la pagina
    if (this.form.valid) {
      this.productService.createProduct(this.form.value).subscribe(product => {
        console.log(product);
        this.router.navigate(['./admin/product-list']);
      });
    }
    console.log(this.form);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const dir = 'images';
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();
  }

  private gerCategories() {
    this.categoriesService.getAllCategories().subscribe(response => {
      this.categories = response;
    });
  }

  get nameField(){
    return this.form.get('name');
  }

  get priceField(){
    return this.form.get('price');
  }

  get imageField(){
    return this.form.get('image');
  }

  get descriptionField(){
    return this.form.get('description');
  }

  get categoryIdField(){
    return this.form.get('category_id');
  }
}
