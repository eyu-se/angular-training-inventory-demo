import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasterBinComponent } from './add-master-bin.component';

describe('AddMasterBinComponent', () => {
  let component: AddMasterBinComponent;
  let fixture: ComponentFixture<AddMasterBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMasterBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMasterBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
