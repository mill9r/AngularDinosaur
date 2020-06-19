import { Component, OnInit } from '@angular/core';
import {DinosaurDashboardService} from "../../services/dinosaur-dashboard.service";
import {DinosaurInterface} from "../../models/dinosaur.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dinosaur-details',
  templateUrl: './dinosaur-details.component.html',
  styleUrls: ['./dinosaur-details.component.scss']
})
export class DinosaurDetailsComponent implements OnInit {

  dinosaur: DinosaurInterface;
  id: string;

  constructor(private dinosaurDashboardService: DinosaurDashboardService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.router.snapshot.paramMap.get('id');
    this.dinosaurDashboardService
      .getDinosaurById(Number(this.id))
      .subscribe((data:DinosaurInterface) =>{
        console.log('data:',data)
        this.dinosaur = data && data[0];
      });
  }

}
