import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantApiService {

  search= new BehaviorSubject("");

  constructor(private api:HttpClient) { }

  // to get all resturants details api call

  allResturantsList()
  {
    // api call
   return this.api.get('http://localhost:3000/restaurants')
  }

  // get only user requested resturant 
  viewRestuarant(restId:any)
  {
  return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  // add new restuarant api - post
  addRestuarant(restBody:any)
  {
    return this.api.post('http://localhost:3000/restaurants',restBody)
  }

  // update particular restuarant
  updateRestuarant(restId:any,restBody:any)
  {
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
  }
  // Delete a particular Restuarant api-delete
  
    deleteRestuarant(restId:any)
    {
     return this.api.delete('http://localhost:3000/restaurants/'+restId)
    }
  }

