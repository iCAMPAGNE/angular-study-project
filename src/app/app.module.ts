import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThreeDComponent } from './components/three-d/three-d.component';
import { DynamicStylingComponent } from './components/dynamic-styling/dynamic-styling.component';
import { AttributeDirective } from './directives/attribute.directive';
import {FormsModule} from "@angular/forms";
import { SingleHostElementAttributeDirective } from './directives/single-host-element-attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ThreeDComponent,
    DynamicStylingComponent,
    AttributeDirective,
    SingleHostElementAttributeDirective,
    StructuralDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
