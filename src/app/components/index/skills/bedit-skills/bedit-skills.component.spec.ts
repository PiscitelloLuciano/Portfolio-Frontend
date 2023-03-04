import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditSkillsComponent } from './bedit-skills.component';

describe('BeditSkillsComponent', () => {
  let component: BeditSkillsComponent;
  let fixture: ComponentFixture<BeditSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeditSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
