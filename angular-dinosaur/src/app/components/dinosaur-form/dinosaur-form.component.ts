import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {MetaDataService} from "../../services/meta-data.service";
import {DinosaurInterface} from "../../models/dinosaur.interface";
import {MetaDataInterface} from "../../models/meta-data.interface";

@Component({
  selector: 'app-dinosaur-form',
  templateUrl: './dinosaur-form.component.html',
  styleUrls: ['./dinosaur-form.component.scss']
})
export class DinosaurFormComponent implements OnInit {

  @Input() metaDinoData: MetaDataInterface;

  @Output() submitForm: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(form){
    this.submitForm.emit(form.value)
  }
}
