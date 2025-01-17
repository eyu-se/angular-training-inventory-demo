import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWarehouseComponent } from './components/warehouse/add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './components/warehouse/edit-warehouse/edit-warehouse.component';
import { ListWarehouseComponent } from './components/warehouse/list-warehouse/list-warehouse.component';

const routes: Routes = [

  { path: 'warehouse/add', component: AddWarehouseComponent },
  { path: 'warehouse/edit/:id', component: EditWarehouseComponent },
  { path: 'warehouse/list', component: ListWarehouseComponent },

  { path: '', redirectTo: '/warehouse/list', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
