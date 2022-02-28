import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValveService } from '../services/valve.service';

interface Valve{
    serinalNo: string;
    type: string;
    location: string;
    status: string;
}


@Component({
  selector: 'app-valveslist',
  templateUrl: './valveslist.component.html',
  styleUrls: ['./valveslist.component.css']
})
export class ValveslistComponent implements OnInit {

  searchValve:FormControl;
  valveList:Valve[] =[];
  valveListDataCopy:Valve[]=[];

  constructor(public valveService:ValveService,private route:Router) { 
    this.searchValve = new FormControl('')
  }

  ngOnInit(): void {
    this.valveService.getValveList().subscribe((data)=>{
      this.valveList = this.valveListDataCopy = data;
    })

    this.searchValve.valueChanges.subscribe((data:string)=>{
      this.valveList = data?this.valveListDataCopy.filter((valve) => valve.serinalNo.toLocaleLowerCase().includes(data.toLocaleLowerCase())):this.valveListDataCopy
    })
  }
  
  
  
  getValveDetail(valve:any){
     this.route.navigate(['/valveslist',valve.serinalNo],)
  }
}
