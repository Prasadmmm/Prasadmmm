import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrFormComponent } from './bmr-form.component';

describe('BmrFormComponent', () => {
  let component: BmrFormComponent;
  let fixture: ComponentFixture<BmrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmrFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
