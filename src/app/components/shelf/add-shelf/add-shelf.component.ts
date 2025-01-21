import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShelfService } from '../../../services/shelf.service';
import { Shelf } from '../../../models/shelf.model';

@Component({
  selector: 'app-add-shelf',
  templateUrl: './add-shelf.component.html',
  styleUrl: './add-shelf.component.css'
})
export class AddShelfComponent {
  shelf = { name: '', warehouseId: 0 };

  constructor(private shelfService: ShelfService, private router: Router) {
  }

  addshelf() {
    this.shelfService.addshelf(this.shelf as Shelf);
    this.router.navigate(['/shelf/list']);
  }

}
