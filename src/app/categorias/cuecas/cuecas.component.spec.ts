import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuecasComponent } from './cuecas.component';

describe('CuecasComponent', () => {
  let component: CuecasComponent;
  let fixture: ComponentFixture<CuecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
