import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsCellRendererComponent } from './actions-cell-renderer.component';

describe('ActionsCellRendererComponent', () => {
  let component: ActionsCellRendererComponent;
  let fixture: ComponentFixture<ActionsCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsCellRendererComponent]
    });
    fixture = TestBed.createComponent(ActionsCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
