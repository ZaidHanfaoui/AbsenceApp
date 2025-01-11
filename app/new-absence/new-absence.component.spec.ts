import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAbsenceComponent } from './new-absence.component';

describe('NewAbsenceComponent', () => {
  let component: NewAbsenceComponent;
  let fixture: ComponentFixture<NewAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAbsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
