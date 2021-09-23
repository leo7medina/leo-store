import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { MyValidators } from 'src/app/utils/validators';
import { Category } from '../../../../interfaces/Category'
import { CategoriesService } from '../../../../services/categories.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this.id = params.id;
      /*this.productService.getProduct(this.id).subscribe( product => {
        this.form.patchValue(product);
        console.log(this.form);
      });*/
      this.gerCategories();
      console.log(this.form);
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValue]],
      image: [''],
      description: ['', [Validators.required]],
      category_id: ['', [Validators.required]]
    });
  }

  saveProduct(event) {
    event.preventDefault();//evita recarga la pagina
    if (this.form.valid) {
      this.productService.updateProduct(this.id, this.form.value).subscribe(product => {
        console.log(product);
        this.router.navigate(['./admin/product-list']);
      });
    }
    console.log(this.form);
  }

  private gerCategories() {
    this.categoriesService.getAllCategories().subscribe(response => {
      this.categories = response;
      this.productService.getProduct(this.id).subscribe( product => {
        this.form.patchValue(product);
        console.log(this.form);
      });
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
