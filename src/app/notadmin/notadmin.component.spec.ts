import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotadminComponent } from './notadmin.component';

describe('NotadminComponent', () => {
  let component: NotadminComponent;
  let fixture: ComponentFixture<NotadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
