import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelDeleteDialogComponent } from './pannel-delete-dialog.component';

describe('PannelDeleteDialogComponent', () => {
  let component: PannelDeleteDialogComponent;
  let fixture: ComponentFixture<PannelDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannelDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PannelDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
