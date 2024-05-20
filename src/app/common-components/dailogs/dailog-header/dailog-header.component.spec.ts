import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogHeaderComponent } from './dailog-header.component';

describe('DailogHeaderComponent', () => {
  let component: DailogHeaderComponent;
  let fixture: ComponentFixture<DailogHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogHeaderComponent]
    });
    fixture = TestBed.createComponent(DailogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
