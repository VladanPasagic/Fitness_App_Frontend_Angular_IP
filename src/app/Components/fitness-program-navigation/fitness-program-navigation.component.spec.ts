import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProgramNavigationComponent } from './fitness-program-navigation.component';

describe('FitnessProgramNavigationComponent', () => {
  let component: FitnessProgramNavigationComponent;
  let fixture: ComponentFixture<FitnessProgramNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessProgramNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessProgramNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
