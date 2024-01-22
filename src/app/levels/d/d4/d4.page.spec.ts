import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D4Page } from './d4.page';

describe('D4Page', () => {
  let component: D4Page;
  let fixture: ComponentFixture<D4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
