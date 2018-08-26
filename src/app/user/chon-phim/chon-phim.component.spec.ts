import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonPhimComponent } from './chon-phim.component';

describe('ChonPhimComponent', () => {
  let component: ChonPhimComponent;
  let fixture: ComponentFixture<ChonPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
