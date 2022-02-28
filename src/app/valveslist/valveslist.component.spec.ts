import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValveslistComponent } from './valveslist.component';

describe('ValveslistComponent', () => {
  let component: ValveslistComponent;
  let fixture: ComponentFixture<ValveslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValveslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValveslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
