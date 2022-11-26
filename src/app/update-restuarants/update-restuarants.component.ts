import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantApiService } from '../service/resturant-api.service';

@Component({
  selector: 'app-update-restuarants',
  templateUrl: './update-restuarants.component.html',
  styleUrls: ['./update-restuarants.component.css']
})
export class UpdateRestuarantsComponent implements OnInit {
 

  restId:any
  restBody:any
  constructor(private activatedRoute:ActivatedRoute,
             private restService : ResturantApiService,
             private router:Router) { }

  ngOnInit(): void 
  {
    // to get restuarant id 
    this.activatedRoute.params.subscribe((data)=>{
      this.restId=data['id']
      
    })
    // to get restuarant Details
    this.restService.viewRestuarant(this.restId)
    .subscribe((result)=>{
      this.restBody =result
      console.log(this.restBody);
      
    })

  }
  UpdateRestuarant(form:any)
  {
    let UpdateRestuarant={
      id:parseInt(form.value.id),
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      name:form.value.name,
      address:form.value.address,
      cuisine_type:form.value.cuisine_type,
      latitude:form.value.lat,
      longitude:form.value.lng,
      operating_hours:
      {
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      latlng:
      {
        lat:form.value.lat,
        lng:form.value.lng
      },
      reviews:
      [
        {
          Name:form.value.Name,
          Date:form.value.Date,
          Rating:parseInt(form.value.Rating),
          comments:form.value.comments
        }
      ]
    }
    console.log(UpdateRestuarant);
    this.restService.updateRestuarant(this.restId,UpdateRestuarant)
    .subscribe((data)=>
    {
      alert("Restuarant Details updated")
      this.router.navigateByUrl('')
    })
      
  }
}
