import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareRoutesService } from 'src/app/services/share-routes.service';

@Component({
  selector: 'app-not-avalible',
  templateUrl: './not-avalible.component.html'
})
export class NotAvalibleComponent implements OnInit {

  public isOnGive = false;
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private shareRoutes: ShareRoutesService) { }

  ngOnInit() {
    this.shareRoutes.getIsOnGive().subscribe(x => {
      if(x ==! undefined) this.isOnGive = x;
    })
  }

  public goToDar() {
    this.router.navigate(['dar']);
    this.activeModal.dismiss('Cross click')
  }
}
