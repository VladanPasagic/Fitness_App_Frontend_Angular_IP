import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProgramsPageComponent } from './fitness-programs-page.component';

describe('FitnessProgramsPageComponent', () => {
  let component: FitnessProgramsPageComponent;
  let fixture: ComponentFixture<FitnessProgramsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessProgramsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessProgramsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
