import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C4Page } from './c4.page';

describe('C4Page', () => {
  let component: C4Page;
  let fixture: ComponentFixture<C4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
