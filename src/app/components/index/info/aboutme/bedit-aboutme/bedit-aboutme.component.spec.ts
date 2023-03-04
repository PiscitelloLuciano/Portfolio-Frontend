import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditAboutmeComponent } from './bedit-aboutme.component';

describe('BeditAboutmeComponent', () => {
  let component: BeditAboutmeComponent;
  let fixture: ComponentFixture<BeditAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeditAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeditAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
