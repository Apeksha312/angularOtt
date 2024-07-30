import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartListComponent } from './shopcart-list.component';

describe('ShopcartListComponent', () => {
  let component: ShopcartListComponent;
  let fixture: ComponentFixture<ShopcartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
