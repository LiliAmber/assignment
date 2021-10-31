import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesBtnComponent } from './all-countries-btn.component';

describe('AllCountriesBtnComponent', () => {
  let component: AllCountriesBtnComponent;
  let fixture: ComponentFixture<AllCountriesBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCountriesBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
