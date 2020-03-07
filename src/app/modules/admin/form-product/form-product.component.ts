import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { MyValidators} from './../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductsService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
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
