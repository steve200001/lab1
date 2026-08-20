import { Injectable } from '@angular/core';
import { InventoryService } from './inventory'; // (o './inventory.service' kung ano man ang pangalan ng file mo)
@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private inventoryService: InventoryService) {}
  // Listahan ng available na bibilhin at ang cart
  availableItems = [
    { id: 1, name: '1HP Compressor', price: 4500, stock: 12 },
    { id: 2, name: 'Copper Tube 1/4', price: 350, stock: 3 },
    { id: 3, name: 'Freon R-32 (Tank)', price: 2800, stock: 0 },
  ];

  cart: any[] = [];

  // Functions na gagamitin natin mamaya
  getAvailableItems() {
    return this.inventoryService.getInventory();
  }

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
    if (item.stock > 0) {
      this.cart.push(item);
      item.stock--; // Babawasan ang stock ng 1
    } else {
      alert('Bossing Wala nang Stock!');
    }
  }

  getTotal() {
    // Computes ang total price ng nasa cart
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
