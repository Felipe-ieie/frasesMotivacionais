import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacionalComponent } from './motivacional.component';

describe('MotivacionalComponent', () => {
  let component: MotivacionalComponent;
  let fixture: ComponentFixture<MotivacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivacionalComponent]
    });
    fixture = TestBed.createComponent(MotivacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
