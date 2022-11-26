import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestuarantsComponent } from './update-restuarants.component';

describe('UpdateRestuarantsComponent', () => {
  let component: UpdateRestuarantsComponent;
  let fixture: ComponentFixture<UpdateRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestuarantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
