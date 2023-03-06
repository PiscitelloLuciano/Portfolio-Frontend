import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggAddknowledgeComponent } from './bagg-addknowledge.component';

describe('BaggAddknowledgeComponent', () => {
  let component: BaggAddknowledgeComponent;
  let fixture: ComponentFixture<BaggAddknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggAddknowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggAddknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
