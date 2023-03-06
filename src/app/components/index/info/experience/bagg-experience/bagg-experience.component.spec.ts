import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggExperienceComponent } from './bagg-experience.component';

describe('BaggExperienceComponent', () => {
  let component: BaggExperienceComponent;
  let fixture: ComponentFixture<BaggExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
