import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggProjectsComponent } from './bagg-projects.component';

describe('BaggProjectsComponent', () => {
  let component: BaggProjectsComponent;
  let fixture: ComponentFixture<BaggProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
