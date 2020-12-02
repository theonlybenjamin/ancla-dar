import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public scroll = false;
  public isHamburgerOpen = false;
  private subcriptiosn = new Subscription();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.subcriptiosn.add(this.router.events.subscribe((event) => {
       if (event instanceof NavigationStart){
        this.closeMenu();
       }

       if (event instanceof NavigationEnd){
        window.scrollTo(0, 0)
       }
     }));
  }

  ngOnDestroy(){
    this.subcriptiosn.unsubscribe();
  }

  private closeMenu() {
    const menuElement = document.getElementById('menu').classList;
    if (menuElement.contains('show')){
      this.isHamburgerOpen = false;
      menuElement.toggle('show');
    }
  }

  public changeIconStatus() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
    document.getElementById('menu').classList.toggle('show');
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
