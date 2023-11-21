import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCleaningComponent } from './office-cleaning.component';

describe('OfficeCleaningComponent', () => {
  let component: OfficeCleaningComponent;
  let fixture: ComponentFixture<OfficeCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeCleaningComponent]
    });
    fixture = TestBed.createComponent(OfficeCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
