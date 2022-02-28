import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValveService {


  getValveList(){
    return of([{

      serinalNo:'SN0000f43',
      type:'S4 Pro',
      location: 'Site1 cheddar,Uk',
      status:'Active'
     },
     {
   
       serinalNo:'SN0000f44',
       type:'S4 Pro',
       location: 'Site1 cheddar,Uk',
       status:'Active'
      },
      {
   
       serinalNo:'SN0000f45',
       type:'S4 Pro',
       location: 'Site1 cheddar,Uk',
       status:'Error'
      },
      {
   
       serinalNo:'SN0000f46',
       type:'S4 Pro',
       location: 'Site1 cheddar,Uk',
       status:'Active'
      }
   ])
  }
}
