import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
    ],
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ProductAlertsComponent,
    TopBarComponent,
    ProductDetailsComponent,
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
