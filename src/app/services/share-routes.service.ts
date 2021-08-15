import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareRoutesService {

  public isOnGive = false;
  private isOnMobile: boolean;
  constructor() { }

  public getIsOnGive() {
    return of(this.isOnGive);
  }

  get isOnMobileDevice(){
    return this.isOnMobile;
  }

  public setIsOnMobile(param: boolean){
    this.isOnMobile = param;
  }
}
