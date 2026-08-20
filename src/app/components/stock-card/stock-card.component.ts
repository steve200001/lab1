import { Component, OnInit, Input } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  imports: [IonItem, IonLabel],
})
export class StockCardComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Input() item: any;
}
