import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditAddknowledgeComponent } from './bedit-addknowledge.component';

describe('BeditAddknowledgeComponent', () => {
  let component: BeditAddknowledgeComponent;
  let fixture: ComponentFixture<BeditAddknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeditAddknowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeditAddknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
