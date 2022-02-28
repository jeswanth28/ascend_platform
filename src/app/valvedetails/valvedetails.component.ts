import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, combineLatestAll, filter, of } from 'rxjs';
import { ValveService } from '../services/valve.service';

@Component({
  selector: 'app-valvedetails',
  templateUrl: './valvedetails.component.html',
  styleUrls: ['./valvedetails.component.css']
})
export class ValvedetailsComponent implements OnInit {

  constructor(private valueService:ValveService,private route:ActivatedRoute) { }
   valve:any;
   characterStics:any[]=[
     {
       text: 'Analog inputvalue: ',
       value: '15.7 mA'
     },
     {
       text: 'Spool position: ',
       value: '68.4%'
     }, {
       text: 'Pressure (P): ',
       value: '35.2bar'
     },
     {
       text: 'Flow torque: ',
       value: '520 mNm'
     }
   ]

  ngOnInit(): void {
   combineLatest([this.route.params,this.valueService.getValveList()]).subscribe((data:any[])=>{
      this.valve = data[1].filter((valve:any)=>valve.serinalNo === data[0].id)[0];
   })

  }

}
