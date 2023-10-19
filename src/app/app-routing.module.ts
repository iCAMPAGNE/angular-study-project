import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ThreeDComponent} from "./components/three-d/three-d.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'three-d', component: ThreeDComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
