import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B4Page } from './b4.page';

describe('B4Page', () => {
  let component: B4Page;
  let fixture: ComponentFixture<B4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
