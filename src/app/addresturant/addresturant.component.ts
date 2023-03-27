import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantApiService } from '../service/resturant-api.service';

@Component({
  selector: 'app-addresturant',
  templateUrl: './addresturant.component.html',
  styleUrls: ['./addresturant.component.css']
})
export class AddresturantComponent implements OnInit {
  id :any
  neighborhood :any
  photograph :any
  name:any
  address:any
  cuisine_type:any
  lat:any
  lng:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  Name:any
  Date:any
  Rating:any
  comments:any
  constructor(private restApi:ResturantApiService,private router:Router) { }

  ngOnInit(): void {
  }
  // Add Restuarant
  addRestuarant()
  {
    let addProduct={
      id:parseInt(this.id),
      neighborhood:this.neighborhood,
      photograph:this.photograph,
      name:this.name,
      address:this.address,
      cuisine_type:this.cuisine_type,
      latitude:this.lat,
      longitude:this.lng,
      operating_hours:
      {
        Monday:this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      latlng:
      {
        lat:this.lat,
        lng:this.lng
      },
      reviews:
      [
        {
          Name:this.Name,
          Date:this.Date,
          Rating:parseInt(this.Rating),
          comments:this.comments
        }
      ]
    }
    console.log(addProduct); 
    this.restApi.addRestuarant(addProduct)
    .subscribe((Data)=>
    {
      alert("New Resturant Details added!!!!!")
      this.router.navigateByUrl('')
    })    
  }
}
