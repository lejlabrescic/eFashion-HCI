import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTableComponent } from './wishlist-table.component';

describe('WishlistTableComponent', () => {
  let component: WishlistTableComponent;
  let fixture: ComponentFixture<WishlistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
