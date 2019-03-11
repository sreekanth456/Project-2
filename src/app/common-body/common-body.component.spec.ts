import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBodyComponent } from './common-body.component';

describe('CommonBodyComponent', () => {
  let component: CommonBodyComponent;
  let fixture: ComponentFixture<CommonBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
