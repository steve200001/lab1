import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  inventoryItems = [
    {
      id: 1,
      name: '1HP Compressor',
      category: 'Parts',
      price: 4500,
      stock: 12,
    },
    {
      id: 2,
      name: 'Copper Tube 1/4',
      category: 'Materials',
      price: 350,
      stock: 3,
    },
    {
      id: 3,
      name: 'Freon R-32 (Tank)',
      category: 'Consumables',
      price: 2800,
      stock: 0,
    },
  ];

  getInventory() {
    return this.inventoryItems;
  }
}
