import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Review1Component } from './components/review1/review1.component';
import { Review2Component } from './components/review2/review2.component';
import { Review3Component } from './components/review3/review3.component';
import { Review4Component } from './components/review4/review4.component';
import { Review5Component } from './components/review5/review5.component';
import { Review6Component } from './components/review6/review6.component';
import { Review7Component } from './components/review7/review7.component';
import { Review8Component } from './components/review8/review8.component';
import { Review10Component } from './components/review10/review10.component';
import { Review11Component } from './components/review11/review11.component';
import { Review12Component } from './components/review12/review12.component';
import { Review13Component } from './components/review13/review13.component';
import { Review14Component } from './components/review14/review14.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  // {
  //   path:'**',
  //   component:HomeComponent
  // },

  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'hoodie',
    component:Review1Component
  },

  {
    path:'bubblejacket',
    component:Review2Component
  },

  {
    path:'nikarshirt',
    component:Review3Component
  },

  {
    path:'nikarshirt2',
    component:Review5Component
  },

  {
    path:'chefshirt',
    component:Review6Component
  },

  {
    path:'bluenikar',
    component:Review7Component
  },

  {
    path:'brownnikar',
    component:Review8Component
  },

  {
    path:'bubblejacket2',
    component:Review4Component
  },

  {
    path:'blackhoodie',
    component:Review10Component
  },

  {
    path:'varsityjacket',
    component:Review11Component
  },

  {
    path:'3colorhoodie',
    component:Review12Component
  },

  {
    path:'yellowtshirt',
    component:Review13Component
  },

  {
    path:'tracksuit',
    component:Review14Component
  },

  {
    path:'contactus',
    component:ContactusComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
