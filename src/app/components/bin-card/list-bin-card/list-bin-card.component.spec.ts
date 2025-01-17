import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBinCardComponent } from './list-bin-card.component';

describe('ListBinCardComponent', () => {
  let component: ListBinCardComponent;
  let fixture: ComponentFixture<ListBinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBinCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
