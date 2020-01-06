import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionCandidatesComponent } from './requisition-candidates.component';

describe('RequisitionCandidatesComponent', () => {
  let component: RequisitionCandidatesComponent;
  let fixture: ComponentFixture<RequisitionCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
