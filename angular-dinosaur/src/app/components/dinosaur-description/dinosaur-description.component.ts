import {Component, Input, OnInit} from '@angular/core';
import {DinosaurInterface} from "../../models/dinosaur.interface";



@Component({
  selector: 'app-dinosaur-description',
  templateUrl: './dinosaur-description.component.html',
  styleUrls: ['./dinosaur-description.component.scss']
})
export class DinosaurDescriptionComponent implements OnInit {

  @Input() dinosaurDescription: DinosaurInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
