import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBinCardComponent } from './edit-bin-card.component';

describe('EditBinCardComponent', () => {
  let component: EditBinCardComponent;
  let fixture: ComponentFixture<EditBinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBinCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
