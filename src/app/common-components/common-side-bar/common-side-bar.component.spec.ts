import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSideBarComponent } from './common-side-bar.component';

describe('CommonSideBarComponent', () => {
  let component: CommonSideBarComponent;
  let fixture: ComponentFixture<CommonSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonSideBarComponent]
    });
    fixture = TestBed.createComponent(CommonSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
