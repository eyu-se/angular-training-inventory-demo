import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AddInventoryComponent } from './components/inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './components/inventory/edit-inventory/edit-inventory.component';
import { ListInventoryComponent } from './components/inventory/list-inventory/list-inventory.component';
import { AddShelfComponent } from './components/shelf/add-shelf/add-shelf.component';
import { EditShelfComponent } from './components/shelf/edit-shelf/edit-shelf.component';
import { ListShelfComponent } from './components/shelf/list-shelf/list-shelf.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { EditItemComponent } from './components/item/edit-item/edit-item.component';
import { ListItemComponent } from './components/item/list-item/list-item.component';
import { AddWarehouseComponent } from './components/warehouse/add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './components/warehouse/edit-warehouse/edit-warehouse.component';
import { ListWarehouseComponent } from './components/warehouse/list-warehouse/list-warehouse.component';
import { AddMasterBinComponent } from './components/master-bin/add-master-bin/add-master-bin.component';
import { EditMasterBinComponent } from './components/master-bin/edit-master-bin/edit-master-bin.component';
import { ListMasterBinComponent } from './components/master-bin/list-master-bin/list-master-bin.component';
import { AddBinCardComponent } from './components/bin-card/add-bin-card/add-bin-card.component';
import { EditBinCardComponent } from './components/bin-card/edit-bin-card/edit-bin-card.component';
import { ListBinCardComponent } from './components/bin-card/list-bin-card/list-bin-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    ListInventoryComponent,
    AddShelfComponent,
    EditShelfComponent,
    ListShelfComponent,
    AddItemComponent,
    EditItemComponent,
    ListItemComponent,
    AddWarehouseComponent,
    EditWarehouseComponent,
    ListWarehouseComponent,
    AddMasterBinComponent,
    EditMasterBinComponent,
    ListMasterBinComponent,
    AddBinCardComponent,
    EditBinCardComponent,
    ListBinCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
