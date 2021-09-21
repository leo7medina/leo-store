import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { CategoriesService } from '../../../../services/categories.service'
import { Category } from '../../../../interfaces/Category'

@Component({
  selector: 'app-category-container-smart',
  templateUrl: './category-container-smart.component.html',
  styleUrls: ['./category-container-smart.component.scss']
})
export class CategoryContainerSmartComponent implements OnInit {

  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.getCategory(params.id);
      }
    })
  }

  createCategory(data) {
    this.categoriesService.createCategory(data).subscribe(response => {
      console.log(response);
      if (response) {
        this.router.navigate(['./admin/categories']);
      }
    });
  }

  updateCategory(data) {
    this.categoriesService.updateCategory(this.category._id, data).subscribe(rta => {
      this.router.navigate(['/admin/categories']);
    });
  }

  private getCategory(id: string) {
    this.categoriesService.getCategory(id).subscribe(data => {
      this.category = data;
    });
  }

}
