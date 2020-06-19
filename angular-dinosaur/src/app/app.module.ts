import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMaterialModule} from "./app-material.module";
import { DinosaurDescriptionComponent } from './components/dinosaur-description/dinosaur-description.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {DinosaurDashboardService} from "./services/dinosaur-dashboard.service";
import { DinosaurDashboardComponent } from './containers/dinosaur-dashboard/dinosaur-dashboard.component';
import { DinosaurDetailsComponent } from './containers/dinosaur-details/dinosaur-details.component';
import { DinosaurFormComponent } from './components/dinosaur-form/dinosaur-form.component';
import { DinosaurCreatorComponent } from './containers/dinosaur-creator/dinosaur-creator.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';


const routes:Routes = [
  {
    path:'', component: HomeComponent, pathMatch: 'full'
  },
  {
    path:'dino-list',component: DinosaurDashboardComponent
  },
  {
    path:'add-dino',component: DinosaurCreatorComponent
  },
  {
    path: 'details/:id', component: DinosaurDetailsComponent
  },
  {
    path:'**', component: NotFoundComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    DinosaurDescriptionComponent,
    HeaderBarComponent,
    DinosaurDashboardComponent,
    DinosaurDetailsComponent,
    DinosaurFormComponent,
    DinosaurCreatorComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DinosaurDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
