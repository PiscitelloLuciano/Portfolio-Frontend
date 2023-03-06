import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggSkillsComponent } from './bagg-skills.component';

describe('BaggSkillsComponent', () => {
  let component: BaggSkillsComponent;
  let fixture: ComponentFixture<BaggSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
