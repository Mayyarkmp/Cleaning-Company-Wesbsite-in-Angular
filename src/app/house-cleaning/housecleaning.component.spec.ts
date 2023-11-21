import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecleaningComponent } from './housecleaning.component';

describe('HousecleaningComponent', () => {
  let component: HousecleaningComponent;
  let fixture: ComponentFixture<HousecleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousecleaningComponent]
    });
    fixture = TestBed.createComponent(HousecleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
