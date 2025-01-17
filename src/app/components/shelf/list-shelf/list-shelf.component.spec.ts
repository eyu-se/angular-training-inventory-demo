import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShelfComponent } from './list-shelf.component';

describe('ListShelfComponent', () => {
  let component: ListShelfComponent;
  let fixture: ComponentFixture<ListShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListShelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
