import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { categoryParams } from 'src/app/models/categoryParams';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
  providers: [ApiService]
})
export class ProductCategoryComponent implements OnInit {

  categories: categoryParams[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.api.getCategoryList()
      .subscribe((respond) => {
        this.categories = respond
        // this.categories = respond.map(cat => {
        //   let category = Object.assign(new categoryParams(), cat);
        //   category.name = cat.name;

        //   return category;
        // });

        console.log(respond);
      }, error => console.log(error))
  }

}
