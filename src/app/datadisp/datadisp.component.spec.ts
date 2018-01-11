import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadispComponent } from './datadisp.component';

describe('DatadispComponent', () => {
  let component: DatadispComponent;
  let fixture: ComponentFixture<DatadispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
