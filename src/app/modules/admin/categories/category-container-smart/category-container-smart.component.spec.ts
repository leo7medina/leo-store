import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryContainerSmartComponent } from './category-container-smart.component';

describe('CategoryContainerSmartComponent', () => {
  let component: CategoryContainerSmartComponent;
  let fixture: ComponentFixture<CategoryContainerSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryContainerSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryContainerSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
