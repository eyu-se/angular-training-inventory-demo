import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasterBinComponent } from './edit-master-bin.component';

describe('EditMasterBinComponent', () => {
  let component: EditMasterBinComponent;
  let fixture: ComponentFixture<EditMasterBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMasterBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMasterBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
