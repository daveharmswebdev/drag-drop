import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragBoundaryComponent } from './drag-boundary.component';

describe('DragBoundaryComponent', () => {
  let component: DragBoundaryComponent;
  let fixture: ComponentFixture<DragBoundaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragBoundaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragBoundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
