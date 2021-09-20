import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../interfaces/Category';
import {CategoriesService} from '../../../../services/categories.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit, AfterViewInit {

  listCategories: Category[] = [];
  displayedColumns: string[] = ['indexNumber', 'name', 'image', 'actions'];

  url_default_1 = "assets/images/default.jpg";
  url_default_2 = "assets/images/default_product.png";
  url_default_3 = "assets/images/sowjing4.png";

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this.getListCategories();
  }

  ngAfterViewInit(): void {
    /*if (this.paginator) {
      this.dataSource.paginator = this.paginator
    }*/
  }

  getListCategories() {
    this.categoriesService.getAllCategories().subscribe(response => {
      this.dataSource.data = response;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator
      }
      //this.listCategories = response;
    });
  }

  checkImage(imageSrc) {
    const img = new Image();
    try {
      img.src = imageSrc;
      if (img.width == 0) {
        return false; // `<img src='./ImageFolder/defaultImage.jpg'>`;
      } else {
        return true; //`<img src='./ImageFolder/`+variable+`.jpg'`;
      }
      //return true;
    } catch(err) {
      return false;
    }
  }

  updateUrl($event, category: Category) {
    console.log('updateURL');
    console.log($event);
    console.log(category.name);
    category.image = this.url_default_1;
  }


}
