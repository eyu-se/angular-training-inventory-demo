import { Component, OnInit } from '@angular/core';
import { Shelf } from '../../../models/shelf.model';
import { ShelfService } from '../../../services/shelf.service';

@Component({
  selector: 'app-list-shelf',
  templateUrl: './list-shelf.component.html',
  styleUrl: './list-shelf.component.css'
})
export class ListShelfComponent implements OnInit {
  shelfs: Shelf[] = [];

  constructor(private shelfService: ShelfService) {
  }

  ngOnInit(): void {
    this.loadshelfs();
  }
  loadshelfs(): void {
    this.shelfs = this.shelfService.getshelfs();
  }
  deleteShelf(id: number) {
    this.shelfService.deleteshelf(id);
    this.loadshelfs();
  }

}
