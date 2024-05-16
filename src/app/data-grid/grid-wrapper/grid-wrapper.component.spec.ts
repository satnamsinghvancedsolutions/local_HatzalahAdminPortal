import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWrapperComponent } from './grid-wrapper.component';

describe('GridWrapperComponent', () => {
  let component: GridWrapperComponent;
  let fixture: ComponentFixture<GridWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridWrapperComponent]
    });
    fixture = TestBed.createComponent(GridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
