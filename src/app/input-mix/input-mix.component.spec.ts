import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMixComponent } from './input-mix.component';

describe('InputMixComponent', () => {
  let component: InputMixComponent;
  let fixture: ComponentFixture<InputMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
