import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImpotantNumberComponent } from './add-impotant-number.component';

describe('AddImpotantNumberComponent', () => {
  let component: AddImpotantNumberComponent;
  let fixture: ComponentFixture<AddImpotantNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddImpotantNumberComponent]
    });
    fixture = TestBed.createComponent(AddImpotantNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
