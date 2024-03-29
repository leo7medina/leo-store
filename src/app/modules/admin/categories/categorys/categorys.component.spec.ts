import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysComponent } from './categorys.component';

describe('CategoryComponent', () => {
  let component: CategorysComponent;
  let fixture: ComponentFixture<CategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
