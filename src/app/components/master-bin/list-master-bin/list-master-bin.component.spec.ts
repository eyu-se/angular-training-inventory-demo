import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMasterBinComponent } from './list-master-bin.component';

describe('ListMasterBinComponent', () => {
  let component: ListMasterBinComponent;
  let fixture: ComponentFixture<ListMasterBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMasterBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMasterBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
