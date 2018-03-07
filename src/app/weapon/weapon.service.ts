import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { catchError } from 'rxjs/operators'

@Injectable()
export class WeaponService {

  constructor(private http: HttpClient) { }

  createWeapon(weaponData) {
  	return this.http.post('http://localhost:3000/weapons/',weaponData)
  	.pipe(catchError(this.handleError))
  }

  getWeapons() {
  	return this.http.get('http://localhost:3000/weapons');
  }

  private handleError (error: any) {
    error = error.json();
    let errMsg = (error.message) ? error.message : error.code ? `${error.code}` : "Server error";
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
