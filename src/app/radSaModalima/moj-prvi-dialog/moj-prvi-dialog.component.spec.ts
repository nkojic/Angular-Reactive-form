import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojPrviDialogComponent } from './moj-prvi-dialog.component';

describe('MojPrviDialogComponent', () => {
  let component: MojPrviDialogComponent;
  let fixture: ComponentFixture<MojPrviDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojPrviDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojPrviDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
