import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductshowcaseComponent } from './productshowcase.component';

describe('ProductshowcaseComponent', () => {
  let component: ProductshowcaseComponent;
  let fixture: ComponentFixture<ProductshowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductshowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
