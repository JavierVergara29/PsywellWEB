import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalStatusComponent } from './emotional-status.component';

describe('EmotionalStatusComponent', () => {
  let component: EmotionalStatusComponent;
  let fixture: ComponentFixture<EmotionalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionalStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
