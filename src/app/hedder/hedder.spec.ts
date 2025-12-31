import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hedder } from './hedder';

describe('Hedder', () => {
  let component: Hedder;
  let fixture: ComponentFixture<Hedder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hedder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hedder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
