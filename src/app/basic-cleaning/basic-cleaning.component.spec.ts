import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCleaningComponent } from './basic-cleaning.component';

describe('BasicCleaningComponent', () => {
  let component: BasicCleaningComponent;
  let fixture: ComponentFixture<BasicCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCleaningComponent]
    });
    fixture = TestBed.createComponent(BasicCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
