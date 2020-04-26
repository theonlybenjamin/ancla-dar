import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public scroll = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll',['$event'])
  scrollTopTransparent(){
    if(window.pageYOffset> 15){
      this.scroll = true;
    }else{
      this.scroll = false
    };
  }
}
