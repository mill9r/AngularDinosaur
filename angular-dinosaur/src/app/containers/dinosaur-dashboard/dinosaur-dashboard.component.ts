import { Component, OnInit } from '@angular/core';
import {DinosaurDashboardService} from "../../services/dinosaur-dashboard.service";
import {DinosaurInterface} from "../../models/dinosaur.interface";

@Component({
  selector: 'app-dinosaur-dashboard',
  templateUrl: './dinosaur-dashboard.component.html',
  styleUrls: ['./dinosaur-dashboard.component.scss']
})
export class DinosaurDashboardComponent implements OnInit {

  dinosaurs: DinosaurInterface [];

  constructor(private dinosaurDashboardService: DinosaurDashboardService ) { }

  ngOnInit(): void {
    this.dinosaurDashboardService
      .getDinosaurs()
      .subscribe((data:DinosaurInterface[])=>{
      this.dinosaurs = data
    });
  }

}
