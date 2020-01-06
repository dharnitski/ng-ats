import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionsFilterComponent } from './requisitions-filter.component';

describe('RequisitionsFilterComponent', () => {
  let component: RequisitionsFilterComponent;
  let fixture: ComponentFixture<RequisitionsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
