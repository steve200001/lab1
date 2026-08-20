import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonLabel,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { InventoryService } from '../../services/inventory';
import { StockCardComponent } from '../../components/stock-card/stock-card.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonLabel,
    IonListHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    StockCardComponent,
  ],
})
export class InventoryPage implements OnInit {
  items: any[] = [];
  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.items = this.inventoryService.getInventory();
  }
}
