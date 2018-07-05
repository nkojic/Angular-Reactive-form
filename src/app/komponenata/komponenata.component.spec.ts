import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenataComponent } from './komponenata.component';

describe('KomponenataComponent', () => {
  let component: KomponenataComponent;
  let fixture: ComponentFixture<KomponenataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomponenataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
