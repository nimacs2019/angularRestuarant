import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ResturantApiService } from '../service/resturant-api.service';

@Component({
  selector: 'app-resturants-list',
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.css']
})
export class ResturantsListComponent implements OnInit {
  resturatantLists:any;

  filterString:any="";
  constructor(private restApi: ResturantApiService) { }

  ngOnInit(): void {
    // asynchronous
    this.restApi.allResturantsList()
      .subscribe((result) => {
        console.log(result);
        this.resturatantLists=result

      })
      // to get search term from service
      this.restApi.search.subscribe((data)=>
      {
        this.filterString = data
        console.log(this.filterString);
        
      })
  }

}
