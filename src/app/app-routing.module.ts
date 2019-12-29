import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductCategoryViewComponent } from './product-category-view/product-category-view.component';
import { ConditionComponent } from './components/condition/condition.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'productCategoryView', component: ProductCategoryViewComponent
  },
  {
    path: 'condition', component: ConditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
