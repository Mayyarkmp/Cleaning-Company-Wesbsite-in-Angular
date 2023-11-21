import { HousecleaningComponent } from './house-cleaning/housecleaning.component';
import { PageNotFoundComponent } from './../../../routing-demo/src/app/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeCleaningComponent } from './office-cleaning/office-cleaning.component';
import { HouseMasterComponent } from './house-master/house-master.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BasicCleaningComponent } from './basic-cleaning/basic-cleaning.component';
import { WindowCleaningComponent } from './window-cleaning/window-cleaning.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  {path:'AREAS', component:AreasComponent},
  {path:'HOME', component:HomeComponent},
  {path:'Window Cleaning', component:WindowCleaningComponent},
  {path:'Basic Cleaning', component:BasicCleaningComponent},
  {path:'House Cleaning', component:HousecleaningComponent},
  {path:'Commercial Cleaning', component:OfficeCleaningComponent},
  {path:'Building Maintenance', component:HouseMasterComponent},
  {path:'SERVICES', component:ServicesComponent},
  {path:'CONTACT', component:ContactComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, HousecleaningComponent, OfficeCleaningComponent, HouseMasterComponent, BasicCleaningComponent]
