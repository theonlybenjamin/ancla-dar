import { Component } from '@angular/core';
import { ShareRoutesService } from './services/share-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private shareService: ShareRoutesService
  ){
    let isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;

    if (isMobile) {
      shareService.setIsOnMobile(isMobile);
    }
  }
}