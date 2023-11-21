import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMasterComponent } from './house-master.component';

describe('HouseMasterComponent', () => {
  let component: HouseMasterComponent;
  let fixture: ComponentFixture<HouseMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseMasterComponent]
    });
    fixture = TestBed.createComponent(HouseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
