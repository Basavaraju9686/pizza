import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewproductComponent } from './listviewproduct.component';

describe('ListviewproductComponent', () => {
  let component: ListviewproductComponent;
  let fixture: ComponentFixture<ListviewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListviewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListviewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
