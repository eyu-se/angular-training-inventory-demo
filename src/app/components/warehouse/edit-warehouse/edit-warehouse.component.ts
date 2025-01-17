import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from '../../../models/warehouse.model';
@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {
  warehouse = { id: 0, name: '', location: '' };
  constructor(
   
  ) {}
  ngOnInit(): void {

    this.warehouse = {id: 102, name:'goro main warehouse', location:'Addis Ababa'}

    }

  updateWarehouse(){
    alert(`warehouse updated name: ${this.warehouse.name} `)
  }
}
