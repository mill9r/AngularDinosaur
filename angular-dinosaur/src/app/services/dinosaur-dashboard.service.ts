import {Injectable} from '@angular/core';
import {DinosaurInterface} from "../models/dinosaur.interface";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

const DINOSAUR_API: string='assets/db.json'

@Injectable({
  providedIn: 'root'
})
export class DinosaurDashboardService {

  constructor(private http: HttpClient) {
  }

  getDinosaurs(): Observable<DinosaurInterface[]> {
    return this.http
      .get(DINOSAUR_API)
      .pipe(map((response: Response) =>{
        return response['dinosaurs']
      }))
  }

}
