import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManufacturingComponent } from './create-manufacturing.component';

describe('CreateManufacturingComponent', () => {
  let component: CreateManufacturingComponent;
  let fixture: ComponentFixture<CreateManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateManufacturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
