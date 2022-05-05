import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestingComponent } from './create-testing.component';

describe('CreateTestingComponent', () => {
  let component: CreateTestingComponent;
  let fixture: ComponentFixture<CreateTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
