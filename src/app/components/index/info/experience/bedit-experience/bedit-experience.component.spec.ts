import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditExperienceComponent } from './bedit-experience.component';

describe('BeditExperienceComponent', () => {
  let component: BeditExperienceComponent;
  let fixture: ComponentFixture<BeditExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeditExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeditExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
