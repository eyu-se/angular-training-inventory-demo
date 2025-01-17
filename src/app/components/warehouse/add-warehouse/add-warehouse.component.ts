import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent {
  warehouse = { name: '', location: '' };

  constructor() {}
  addWarehouse(): void {
    alert(`warehouse name: ${this.warehouse.name} Added`)
  }
}
