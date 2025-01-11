import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEmployesComponent } from './load-employes.component';

describe('LoadEmployesComponent', () => {
  let component: LoadEmployesComponent;
  let fixture: ComponentFixture<LoadEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadEmployesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
