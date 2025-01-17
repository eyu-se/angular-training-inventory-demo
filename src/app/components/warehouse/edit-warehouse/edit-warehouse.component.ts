import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from '../../../models/warehouse.model';
import { WarehouseService } from '../../../services/warehouse.service';
@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {

  warehouse:Warehouse = { id: 0, name: '', location: '' };

  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.warehouse = this.warehouseService.getWarehouseById(id);
  }

  updateWarehouse(): void {
    this.warehouseService.updateWarehouse(this.warehouse);
    this.router.navigate(['/warehouse/list']);

  }
  
}
