import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValvedetailsComponent } from './valvedetails.component';

describe('ValvedetailsComponent', () => {
  let component: ValvedetailsComponent;
  let fixture: ComponentFixture<ValvedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValvedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValvedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
