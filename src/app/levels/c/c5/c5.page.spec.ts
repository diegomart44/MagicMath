import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C5Page } from './c5.page';

describe('C5Page', () => {
  let component: C5Page;
  let fixture: ComponentFixture<C5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
