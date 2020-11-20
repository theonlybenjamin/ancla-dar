import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public actualOption: number;
  constructor() { }

  ngOnInit() {
  }

  public optionSelected(option: number) {
    this.actualOption = option;
  }
}
