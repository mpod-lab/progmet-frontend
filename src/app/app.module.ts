import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCategoryViewComponent } from './product-category-view/product-category-view.component';
import { LogoComponent } from './components/logo/logo.component';
import { ConditionComponent } from './components/condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    ProductComponent,
    FooterComponent,
    ProductCategoryComponent,
    NavbarComponent,
    ProductCategoryViewComponent,
    LogoComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
