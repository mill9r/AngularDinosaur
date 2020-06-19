import {Injectable} from '@angular/core';
import {DinosaurInterface} from "../models/dinosaur.interface";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {map, catchError} from "rxjs/operators";

const DINOSAUR_API: string = 'assets/db.json'

@Injectable({
  providedIn: 'root'
})
export class DinosaurDashboardService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getDinosaurs(): Observable<DinosaurInterface[]> {
    return this.http
      .get(DINOSAUR_API)
      .pipe(map((response: Response) => {
        return response['dinosaurs']
      }))
  }

  getDinosaurById(id: number): Observable<DinosaurInterface> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .get(DINOSAUR_API)
      .pipe(
        map((response: Response) => {
            return response['dinosaurs'].filter(dino => dino.id === id);
          }
        ),
        catchError(this.handleError)
      )
  }

  updateDinosaur(dinosaur: DinosaurInterface): Observable<DinosaurInterface[]> {
    return this.http
      .put(`${DINOSAUR_API}/${dinosaur.id}`, dinosaur)
      .pipe(
        map((response: Response) => response['dinosaurs']),
        catchError(this.handleError)
      )
  }

  addDinosaur(dinosaur: DinosaurInterface) { //: Observable<DinosaurInterface[]> {
    console.log('dino stored')
    return this.http
      .post(`${DINOSAUR_API}/dinosaurs`, JSON.stringify(dinosaur))
      .pipe(
        map((response: Response) => response['dinosaurs']),
        catchError(this.handleError)
      ).subscribe(data =>{
        console.log(data)
      })
  }

  removeDinosaur(dinosaur: DinosaurInterface):Observable<DinosaurInterface[]>{
    return this.http
      .delete(`${DINOSAUR_API}/${dinosaur.id}`)
      .pipe(
        map((response: Response) => response['dinosaurs']),
        catchError(this.handleError)
      )
}

}
