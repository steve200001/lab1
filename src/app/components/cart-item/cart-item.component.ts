import { Component, OnInit, Input } from '@angular/core';
import { IonItem, IonNote, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [IonItem, IonNote, IonLabel],
})
export class CartItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() item: any;
}
