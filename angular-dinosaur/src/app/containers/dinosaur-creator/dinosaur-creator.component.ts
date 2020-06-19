import { Component, OnInit } from '@angular/core';
import {MetaDataInterface} from "../../models/meta-data.interface";
import {MetaDataService} from "../../services/meta-data.service";
import {DinosaurInterface} from "../../models/dinosaur.interface";
import {DinosaurDashboardService} from "../../services/dinosaur-dashboard.service";

@Component({
  selector: 'app-dinosaur-creator',
  templateUrl: './dinosaur-creator.component.html',
  styleUrls: ['./dinosaur-creator.component.scss']
})
export class DinosaurCreatorComponent implements OnInit {

  metaDinoData:MetaDataInterface;
  dinosaur: DinosaurInterface;

  constructor(private metaData: MetaDataService, private dinosaurDashboardService: DinosaurDashboardService) {
    this.metaDinoData = {
      "continents": [
        "North America",
        "South America",
        "North Africa",
        "South Africa",
        "Europe",
        "Asia",
        "Australia",
        "Oceania"
      ],
      "historicalPeriods" : [
        "Triassic",
        "Jurassic",
        "Cretaceous",
        "Tertiary"
      ]
    }
  }

  ngOnInit(): void {
    //  TODO RxJS async???
    // this.metaData
    //   .getMetaData()
    //   .subscribe((data: MetaDataInterface)=>{
    //     console.log(data)
    //     if(data.continents && data.historicalPeriods){
    //       console.log('if:',data)
    //       this.metaDinoData = data
    //     }
    //   })
  }

  createDino(dino){
    console.log(dino)
    this.dinosaurDashboardService.addDinosaur(dino)
  }

}
