import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit {
  warehouses: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.loadWarehouses();
  }
  loadWarehouses(): void {
    this.warehouses = [{ id: 100, name: 'Main Warehouse', location: 'Addis Ababa' } , { id: 101, name: 'East Gate Warehouse', location: 'Dukem ' } ]
  }
  deleteWarehouse(id: number): void {
    let i = this.warehouses.findIndex(warehouse => warehouse.id == id);
    this.warehouses.splice(i, 1);
  }
}
