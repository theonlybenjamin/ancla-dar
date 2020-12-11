import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public googleMapsUrl = 'https://goo.gl/maps/KZ9c7Y1oDdFc6PdQA';
  public wazeUrl = 'https://ul.waze.com/ul?place=ChIJededzvR_BpERole0pRxRBOY&ll=-11.77495230%2C-77.17168730&navigate=yes';
  constructor() { }

  ngOnInit() {
  }

}
