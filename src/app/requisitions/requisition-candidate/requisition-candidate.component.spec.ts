import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionCandidateComponent } from './requisition-candidate.component';

describe('RequisitionCandidateComponent', () => {
  let component: RequisitionCandidateComponent;
  let fixture: ComponentFixture<RequisitionCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
