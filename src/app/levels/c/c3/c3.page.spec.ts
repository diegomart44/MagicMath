import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3Page } from './c3.page';

describe('C3Page', () => {
  let component: C3Page;
  let fixture: ComponentFixture<C3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
