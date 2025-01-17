import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from '../../../models/warehouse.model';
import { WarehouseService } from '../../../services/warehouse.service';
@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent {
  warehouse = { name: '', location: '' };

  constructor(private warehouseService: WarehouseService, private router: Router) {
  }

  addWarehouse() {
    this.warehouseService.addWarehouse(this.warehouse as Warehouse);
    this.router.navigate(['/warehouse/list']);
  }

}
