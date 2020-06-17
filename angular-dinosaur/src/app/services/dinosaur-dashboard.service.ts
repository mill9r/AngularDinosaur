import {Injectable} from '@angular/core';
import {DinosaurInterface} from "../models/dinosaur.interface";

@Injectable({
  providedIn: 'root'
})
export class DinosaurDashboardService {

  constructor() {
  }

  getDinosaurs(): DinosaurInterface[] {
    return [
      {
        dinoName: 'Diplodocus',
        dinoDescription: 'Diplodocus is one of the more common dinosaur fossils found in the middle to upper Morrison Formation',
        dinoGeography: ['North America'],  //dropDown
        dinoAppeared: 240,   // picker?
        dinoExtincted: 233,
        dinoLifePeriods: ['Jurassic', 'Cretaceous'],  // DropDown
        dinoImg: './../assets/images/diplodocus.png',
        dinoType: 'mammal', //mammal or raptor (radiobutton)
      },
      {
        dinoName: 'Eoraptor',
        dinoDescription: 'It was a small, lightly-built, basal saurischian dinosaur.',
        dinoGeography: ['South America'],  //dropDown
        dinoAppeared: 231,   // picker?
        dinoExtincted: 228,
        dinoLifePeriods: ['Late Triassic'],  // DropDown
        dinoImg: './../assets/images/eoraptor.png',
        dinoType: 'raptor', //mammal or raptor (radiobutton)
      }
    ]
  }

}
