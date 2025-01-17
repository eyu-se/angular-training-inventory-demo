import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBinCardComponent } from './add-bin-card.component';

describe('AddBinCardComponent', () => {
  let component: AddBinCardComponent;
  let fixture: ComponentFixture<AddBinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBinCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
