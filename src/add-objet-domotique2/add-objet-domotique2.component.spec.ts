import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjetDomotique2Component } from './add-objet-domotique2.component';

describe('AddObjetDomotique2Component', () => {
  let component: AddObjetDomotique2Component;
  let fixture: ComponentFixture<AddObjetDomotique2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObjetDomotique2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObjetDomotique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
