import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProgramPageComponent } from './fitness-program-page.component';

describe('FitnessProgramPageComponent', () => {
  let component: FitnessProgramPageComponent;
  let fixture: ComponentFixture<FitnessProgramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessProgramPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
