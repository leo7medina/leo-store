import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  listProduct$: Observable<Product[]>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.listProduct$ = this.cartService.cart$.pipe(
      map((productos:[]) => {
        const distintos = [...new Set(productos)];
        return distintos;
      })
    );
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.array([])
    });
  }

  saveStep2() {
    console.log(this.form);
  }

  addAddressField() {
    this.addressField.push(this.createAddressField());
  }

  private createAddressField() {
    return this.formBuilder.group({
      zip: ['', Validators.required],
      text: ['', Validators.required]
    })
  }

  get nameField() {
    return this.form.get('name');
  }

  get addressField() {
    return this.form.get('address') as FormArray;
  }

}
