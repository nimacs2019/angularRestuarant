import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresturantComponent } from './addresturant/addresturant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { UpdateRestuarantsComponent } from './update-restuarants/update-restuarants.component';
import { ViewResturantComponent } from './view-resturant/view-resturant.component';

const routes: Routes = [
  // path for resturant list
  {
    path:'', component:ResturantsListComponent
  },
  // path for view a single resturant details
  {
    path:'view-resturant/:id', component:ViewResturantComponent
  },
    // path for add resturant details
  {
    path:'add-resturant', component:AddresturantComponent
  },
  // path for Upadate resturant details
  {
    path:'update-Restuarants/:id',component:UpdateRestuarantsComponent
  },
  // path for Delete resturant details
  {
    path:'delete-restuarant/:id',component:DeleteRestuarantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
