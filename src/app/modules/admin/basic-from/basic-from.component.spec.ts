import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFromComponent } from './basic-from.component';

describe('BasicFromComponent', () => {
  let component: BasicFromComponent;
  let fixture: ComponentFixture<BasicFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
