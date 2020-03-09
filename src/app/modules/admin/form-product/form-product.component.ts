import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { MyValidators} from './../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductsService,
    private angularFireStorage: AngularFireStorage
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

}
