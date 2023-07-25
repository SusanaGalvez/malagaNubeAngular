import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantePagComponent } from './restaurante-pag.component';

describe('RestaurantePagComponent', () => {
  let component: RestaurantePagComponent;
  let fixture: ComponentFixture<RestaurantePagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantePagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
