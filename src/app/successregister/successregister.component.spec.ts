import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessregisterComponent } from './successregister.component';

describe('SuccessregisterComponent', () => {
  let component: SuccessregisterComponent;
  let fixture: ComponentFixture<SuccessregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
