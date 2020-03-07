import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeatedRoute.params.subscribe( (params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe( product => {
        this.form.patchValue(product);
        /*this.form.patchValue({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image
        });*/
      });
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

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValue]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
