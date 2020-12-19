import { Component, OnInit, HostListener, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ShareRoutesService } from 'src/app/services/share-routes.service';
import { NotAvalibleComponent } from '../not-avalible/not-avalible.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public scroll = false;
  public isHamburgerOpen = false;
  private subcriptiosn = new Subscription();
  @Output() isOnGive = new EventEmitter;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private shareRoutes: ShareRoutesService
  ) { }

  ngOnInit() {
    this.subcriptiosn.add(this.router.events.subscribe((event) => {
       if (event instanceof NavigationStart){
         if(event && event.url === '/dar') {
           this.shareRoutes.isOnGive = true;
         } else {
           this.shareRoutes.isOnGive = false;
         }
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

  public notAvalibleModal(){
    this.modalService.open(NotAvalibleComponent, { size: 'sm',centered: true, backdrop: 'static' })
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
