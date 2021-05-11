import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSystemsComponent } from './view-systems.component';

describe('ViewSystemsComponent', () => {
  let component: ViewSystemsComponent;
  let fixture: ComponentFixture<ViewSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
