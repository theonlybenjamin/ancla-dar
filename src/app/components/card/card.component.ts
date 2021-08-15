import { Component, OnInit } from '@angular/core';
import { ShareRoutesService } from 'src/app/services/share-routes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public transferHref: string;
  public actualOption: number;
  constructor(
    public routesService: ShareRoutesService
  ) { }

  ngOnInit() {
  }

  public optionSelected(option: number) {
    this.actualOption = option;
  }
}
