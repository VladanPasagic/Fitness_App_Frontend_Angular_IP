import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgLossComponent } from './kg-loss.component';

describe('KgLossComponent', () => {
  let component: KgLossComponent;
  let fixture: ComponentFixture<KgLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KgLossComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KgLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
