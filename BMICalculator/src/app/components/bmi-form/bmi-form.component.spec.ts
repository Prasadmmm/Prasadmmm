import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiFormComponent } from './bmi-form.component';

describe('BmiFormComponent', () => {
  let component: BmiFormComponent;
  let fixture: ComponentFixture<BmiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
