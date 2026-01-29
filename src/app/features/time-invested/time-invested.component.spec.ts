import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInvestedComponent } from './time-invested.component';

describe('TimeInvestedComponent', () => {
  let component: TimeInvestedComponent;
  let fixture: ComponentFixture<TimeInvestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeInvestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeInvestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
