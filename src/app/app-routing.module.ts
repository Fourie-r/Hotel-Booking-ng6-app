import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  {path: 'accommodation', component: AccommodationComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'food-and-beverage', component: FoodAndBeverageComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
