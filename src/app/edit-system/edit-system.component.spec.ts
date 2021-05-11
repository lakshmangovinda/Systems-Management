import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemComponent } from './edit-system.component';

describe('EditSystemComponent', () => {
  let component: EditSystemComponent;
  let fixture: ComponentFixture<EditSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
