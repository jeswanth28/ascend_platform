import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValveslistComponent } from './valveslist/valveslist.component';
import { ValvedetailsComponent } from './valvedetails/valvedetails.component';
import { RouterModule } from '@angular/router';

const appRoutes= [
  {
    path: 'valveslist', component: ValveslistComponent
  },
  {
    path: 'valveslist/:id', component: ValvedetailsComponent
  },
  {
    path:'',redirectTo:'/valveslist', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ValveslistComponent,
    ValvedetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
