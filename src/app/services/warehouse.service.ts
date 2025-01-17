import { Injectable } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  // Static array of warehouses
  private warehouses:Warehouse[] = [
    { id: 1, name: 'Warehouse A', location: 'Adama'},
    { id: 2, name: 'Warehouse B', location: 'Addis Ababa' },
    { id: 3, name: 'Warehouse C', location: 'Hawasa'},
  ];
  constructor() {}
  // 1. Get all warehouses
  getWarehouses(): Warehouse[] {
    return this.warehouses;
  }
  // 2. Get a single warehouse by ID
  getWarehouseById(id: number): Warehouse {
    return this.warehouses.find((warehouse:Warehouse) => warehouse.id === id) as Warehouse;
  }
  // 3. Add a new warehouse
  addWarehouse(data: Warehouse): void {
    const newId = this.warehouses.length
      ? Math.max(...this.warehouses.map((w) => w.id)) + 1
      : 1;
    const newWarehouse = { ...data, id: newId };
    this.warehouses.push(newWarehouse);
  }
  // 4. Update an existing warehouse
  updateWarehouse(data: Warehouse): boolean {
    const index = this.warehouses.findIndex((w) => w.id === data.id);
    if (index !== -1) {
      this.warehouses[index] = { ...this.warehouses[index], ...data };
      return true;
    }
    return false;
  }
  // 5. Delete a warehouse by ID
  deleteWarehouse(id: number): boolean {
    const index = this.warehouses.findIndex((w) => w.id === id);
    if (index !== -1) {
      this.warehouses.splice(index, 1);
      return true;
    }
    return false;
  }
}
