import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantApiService } from '../service/resturant-api.service';

@Component({
  selector: 'app-view-resturant',
  templateUrl: './view-resturant.component.html',
  styleUrls: ['./view-resturant.component.css']
})
export class ViewResturantComponent implements OnInit {
  
  restId:any
  restBody:any
  
  constructor(private activatedRoute:ActivatedRoute,
    private restService : ResturantApiService){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      // console.log(this.restId);     
  })
  
  // api call
  this.restService.viewRestuarant(this.restId)
  .subscribe((result)=>{
  this.restBody = result
  console.log(this.restBody);
    
  })
  }
}
