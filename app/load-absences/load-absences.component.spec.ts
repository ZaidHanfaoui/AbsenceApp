import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAbsencesComponent } from './load-absences.component';

describe('LoadAbsencesComponent', () => {
  let component: LoadAbsencesComponent;
  let fixture: ComponentFixture<LoadAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadAbsencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
