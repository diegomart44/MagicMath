import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B1Page } from './b1.page';

describe('B1Page', () => {
  let component: B1Page;
  let fixture: ComponentFixture<B1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
