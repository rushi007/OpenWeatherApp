import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastModalComponent } from './forecast-modal.component';

describe('ForecastModalComponent', () => {
  let component: ForecastModalComponent;
  let fixture: ComponentFixture<ForecastModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
