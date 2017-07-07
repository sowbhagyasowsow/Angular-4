import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeHeadInputComponent } from './type-head-input.component';

describe('TypeHeadInputComponent', () => {
  let component: TypeHeadInputComponent;
  let fixture: ComponentFixture<TypeHeadInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeHeadInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeHeadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
