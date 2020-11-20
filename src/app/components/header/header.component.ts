import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public scroll = false;
  public hamburgerIcon = false;

  constructor() { }

  ngOnInit() {
  }

  public changeIconStatus() {
    this.hamburgerIcon = !this.hamburgerIcon;
    document.getElementById('menu').classList.toggle('dont-show');
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
