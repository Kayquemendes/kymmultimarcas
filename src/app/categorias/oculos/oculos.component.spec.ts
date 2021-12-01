import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculosComponent } from './oculos.component';

describe('OculosComponent', () => {
  let component: OculosComponent;
  let fixture: ComponentFixture<OculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
