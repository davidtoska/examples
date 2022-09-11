import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsolutePositioningComponent } from './absolute-positioning.component';

describe('AbsolutePositioningComponent', () => {
  let component: AbsolutePositioningComponent;
  let fixture: ComponentFixture<AbsolutePositioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbsolutePositioningComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsolutePositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
