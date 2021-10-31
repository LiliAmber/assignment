import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFoundsComponent } from './no-page-founds.component';

describe('NoPageFoundsComponent', () => {
  let component: NoPageFoundsComponent;
  let fixture: ComponentFixture<NoPageFoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageFoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPageFoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
