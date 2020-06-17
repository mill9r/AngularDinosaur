import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMaterialModule} from "./app-material.module";
import { DinosaurDescriptionComponent } from './components/dinosaur-description/dinosaur-description.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {DinosaurDashboardService} from "./services/dinosaur-dashboard.service";
import { DinosaurDashboardComponent } from './container/dinosaur-dashboard/dinosaur-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurDescriptionComponent,
    HeaderBarComponent,
    DinosaurDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    AppMaterialModule
  ],
  providers: [DinosaurDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
