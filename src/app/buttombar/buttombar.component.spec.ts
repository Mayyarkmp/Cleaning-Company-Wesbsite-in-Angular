import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtombarComponent } from './buttombar.component';

describe('ButtombarComponent', () => {
  let component: ButtombarComponent;
  let fixture: ComponentFixture<ButtombarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtombarComponent]
    });
    fixture = TestBed.createComponent(ButtombarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
