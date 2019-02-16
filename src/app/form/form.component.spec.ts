import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { myFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: myFormComponent;
  let fixture: ComponentFixture<myFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ myFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(myFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
