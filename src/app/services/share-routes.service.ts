import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareRoutesService {

  public isOnGive = false;

  constructor() { }

  public getIsOnGive() {
    return of(this.isOnGive);
  }
}
