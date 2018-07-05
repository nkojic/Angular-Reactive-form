import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrviPrikazComponent } from './prvi-prikaz.component';

describe('PrviPrikazComponent', () => {
  let component: PrviPrikazComponent;
  let fixture: ComponentFixture<PrviPrikazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrviPrikazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrviPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
