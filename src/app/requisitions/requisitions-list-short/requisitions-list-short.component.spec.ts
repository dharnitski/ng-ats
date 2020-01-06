import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionsListShortComponent } from './requisitions-list-short.component';

describe('RequisitionsListShortComponent', () => {
  let component: RequisitionsListShortComponent;
  let fixture: ComponentFixture<RequisitionsListShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionsListShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionsListShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
