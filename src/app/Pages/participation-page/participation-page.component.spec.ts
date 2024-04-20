import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationPageComponent } from './participation-page.component';

describe('ParticipationPageComponent', () => {
  let component: ParticipationPageComponent;
  let fixture: ComponentFixture<ParticipationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
