import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C2Page } from './c2.page';

describe('C2Page', () => {
  let component: C2Page;
  let fixture: ComponentFixture<C2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
