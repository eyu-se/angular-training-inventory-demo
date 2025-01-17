import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../../services/warehouse.service';
import { Warehouse } from '../../../models/warehouse.model';
@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit {
  warehouses: Warehouse[] = [];
  warehouse!: Warehouse;

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit(): void {
    this.loadWarehouses();
  }
  loadWarehouses(): void {
    this.warehouses = this.warehouseService.getWarehouses();
  }
  deleteWarehouse(id: number) {
    this.warehouseService.deleteWarehouse(id);
    this.loadWarehouses();
  }

}
