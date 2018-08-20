import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDienVienComponent } from './item-dien-vien.component';

describe('ItemDienVienComponent', () => {
  let component: ItemDienVienComponent;
  let fixture: ComponentFixture<ItemDienVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDienVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDienVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
