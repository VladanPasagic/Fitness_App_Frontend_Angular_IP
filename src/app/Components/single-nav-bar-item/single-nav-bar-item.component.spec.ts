import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNavBarItemComponent } from './single-nav-bar-item.component';

describe('SingleNavBarItemComponent', () => {
  let component: SingleNavBarItemComponent;
  let fixture: ComponentFixture<SingleNavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleNavBarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
