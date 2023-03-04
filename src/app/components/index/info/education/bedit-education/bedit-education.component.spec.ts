import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditEducationComponent } from './bedit-education.component';

describe('BeditEducationComponent', () => {
  let component: BeditEducationComponent;
  let fixture: ComponentFixture<BeditEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeditEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
