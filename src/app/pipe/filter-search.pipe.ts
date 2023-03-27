import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(restuarants:any[],filterString:string,PropName:string) {
    const result:any = [];
    if(!restuarants||filterString==''||PropName=='')
    {
      return restuarants
    }
    restuarants.forEach((restuarant:any)=>
    {
     if( restuarant[PropName].trim().toLowerCase().includes(filterString))
     {
        result.push(restuarant)
     }
    })
    return result;
  }

}
