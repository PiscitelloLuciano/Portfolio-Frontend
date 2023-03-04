import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddknowledgeComponent } from './addknowledge.component';

describe('AddknowledgeComponent', () => {
  let component: AddknowledgeComponent;
  let fixture: ComponentFixture<AddknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddknowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
