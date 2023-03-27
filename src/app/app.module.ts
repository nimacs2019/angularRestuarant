import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewResturantComponent } from './view-resturant/view-resturant.component';
import { AddresturantComponent } from './addresturant/addresturant.component';
import { FormsModule } from '@angular/forms';
import { UpdateRestuarantsComponent } from './update-restuarants/update-restuarants.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { FilterSearchPipe } from './pipe/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResturantsListComponent,
    HeaderComponent,
    FooterComponent,
    ViewResturantComponent,
    AddresturantComponent,
    UpdateRestuarantsComponent,
    DeleteRestuarantComponent,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
