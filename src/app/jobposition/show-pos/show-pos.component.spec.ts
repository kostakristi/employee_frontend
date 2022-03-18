import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPosComponent } from './show-pos.component';

describe('ShowPosComponent', () => {
  let component: ShowPosComponent;
  let fixture: ComponentFixture<ShowPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
