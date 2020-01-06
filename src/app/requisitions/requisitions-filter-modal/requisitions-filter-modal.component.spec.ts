import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionsFilterModalComponent } from './requisitions-filter-modal.component';

describe('RequisitionsFilterModalComponent', () => {
  let component: RequisitionsFilterModalComponent;
  let fixture: ComponentFixture<RequisitionsFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionsFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
