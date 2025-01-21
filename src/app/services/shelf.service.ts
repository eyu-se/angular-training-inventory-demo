import { Injectable } from '@angular/core';
import { Shelf } from '../models/shelf.model';
@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  // Static array of shelfs
  private shelfs:Shelf[] = [
    { id: 1, name: 'shelf A', warehouseId: 1},
    { id: 2, name: 'shelf B', warehouseId: 1 },
    { id: 3, name: 'shelf C', warehouseId: 2},
  ];
  constructor() {}
  // 1. Get all shelfs
  getshelfs(): Shelf[] {
    return this.shelfs;
  }
  // 2. Get a single shelf by ID
  getshelfById(id: number): Shelf {
    return this.shelfs.find((shelf:Shelf) => shelf.id === id) as Shelf;
  }
  // 3. Add a new shelf
  addshelf(data: Shelf): void {
    const newId = this.shelfs.length
      ? Math.max(...this.shelfs.map((w) => w.id)) + 1
      : 1;
    const newshelf = { ...data, id: newId };
    this.shelfs.push(newshelf);
  }
  // 4. Update an existing shelf
  updateshelf(data: Shelf): boolean {
    const index = this.shelfs.findIndex((w) => w.id === data.id);
    if (index !== -1) {
      this.shelfs[index] = { ...this.shelfs[index], ...data };
      return true;
    }
    return false;
  }
  // 5. Delete a shelf by ID
  deleteshelf(id: number): boolean {
    const index = this.shelfs.findIndex((w) => w.id === id);
    if (index !== -1) {
      this.shelfs.splice(index, 1);
      return true;
    }
    return false;
  }
}
