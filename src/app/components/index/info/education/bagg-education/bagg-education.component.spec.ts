import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggEducationComponent } from './bagg-education.component';

describe('BaggEducationComponent', () => {
  let component: BaggEducationComponent;
  let fixture: ComponentFixture<BaggEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
