import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContactComponent } from './layout-contact.component';

describe('LayoutContactComponent', () => {
  let component: LayoutContactComponent;
  let fixture: ComponentFixture<LayoutContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
