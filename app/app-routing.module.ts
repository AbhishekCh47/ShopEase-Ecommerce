import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {RatingComponent} from "./components/rating/rating.component";


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path: 'product/:id',component: ProductComponent
  },
  {
    path: 'cart',component: CartComponent
  },
  {
    path: 'checkout',component: CheckoutComponent
  },

  {
    path: 'rating',component:RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
