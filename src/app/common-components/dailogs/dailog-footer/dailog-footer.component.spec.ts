import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogFooterComponent } from './dailog-footer.component';

describe('DailogFooterComponent', () => {
  let component: DailogFooterComponent;
  let fixture: ComponentFixture<DailogFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogFooterComponent]
    });
    fixture = TestBed.createComponent(DailogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
