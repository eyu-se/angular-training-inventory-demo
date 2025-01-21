import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shelf } from '../../../models/shelf.model';
import { ShelfService } from '../../../services/shelf.service';

@Component({
  selector: 'app-edit-shelf',
  templateUrl: './edit-shelf.component.html',
  styleUrl: './edit-shelf.component.css'
})
export class EditShelfComponent implements OnInit {

  shelf:Shelf = { id: 0, name: '', warehouseId: 0 };

  constructor(
    private route: ActivatedRoute,
    private shelfService: ShelfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shelf = this.shelfService.getshelfById(id);
  }

  updateShelf(): void {
    this.shelfService.updateshelf(this.shelf);
    this.router.navigate(['/shelf/list']);

  }
  
}
