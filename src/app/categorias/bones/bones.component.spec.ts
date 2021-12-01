import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonesComponent } from './bones.component';

describe('BonesComponent', () => {
  let component: BonesComponent;
  let fixture: ComponentFixture<BonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
