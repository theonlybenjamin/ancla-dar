import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollHeader]'
})
export class ScrollHeaderDirective {
  public scroll:any;
  constructor() { }

  @HostListener('window:scroll',['$event'])
  scrollTopTransparent(){
    this.scroll = window.pageYOffset;
    if(window.pageYOffset>20){
      
    }else{
      console.log('nope')
    };
  }

}
