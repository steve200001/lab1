import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { SalesService } from '../../services/sales';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonButton,
    IonItem,
    IonList,
    IonLabel,
    IonListHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CartItemComponent,
  ],
})
export class SalesPage implements OnInit {
  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.availableItems = this.salesService.getAvailableItems();
    this.updateCartDisplay();
  }

  availableItems: any[] = [];
  cartItems: any[] = [];
  totalPrice: number = 0;

  addItem(item: any) {
    this.salesService.addToCart(item);
    this.updateCartDisplay();
  }

  // Pang-update ng total at listahan
  updateCartDisplay() {
    this.cartItems = this.salesService.getCart();
    this.totalPrice = this.salesService.getTotal();
  }

  checkout() {
    this.salesService.clearCart();
    this.updateCartDisplay();
    alert('Checkout successful! Tanku!.');
  }
}
