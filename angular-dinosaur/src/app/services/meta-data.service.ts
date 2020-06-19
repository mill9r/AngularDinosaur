import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError} from "rxjs/operators";
import {DinosaurInterface} from "../models/dinosaur.interface";
import {MetaDataInterface} from "../models/meta-data.interface";

const META_DATA_API: string = 'assets/meta-data.json'

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  public metaData: BehaviorSubject<MetaDataInterface> = new BehaviorSubject<MetaDataInterface>(null);

  constructor(private http: HttpClient) {
  }

  getFormData() {
    this.getMetaData().subscribe(response => this.metaData.next(response));
  }

  private getMetaData(): Observable<MetaDataInterface> {
    return this.http
      .get(META_DATA_API)
      .pipe(map((response: MetaDataInterface) => {
        return response
      }))
  }
}
