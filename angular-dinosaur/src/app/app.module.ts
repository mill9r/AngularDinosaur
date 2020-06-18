import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMaterialModule} from "./app-material.module";
import { DinosaurDescriptionComponent } from './components/dinosaur-description/dinosaur-description.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {DinosaurDashboardService} from "./services/dinosaur-dashboard.service";
import { DinosaurDashboardComponent } from './containers/dinosaur-dashboard/dinosaur-dashboard.component';
import { DinosaurDetailsComponent } from './containers/dinosaur-details/dinosaur-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurDescriptionComponent,
    HeaderBarComponent,
    DinosaurDashboardComponent,
    DinosaurDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [DinosaurDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
