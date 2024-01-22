import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D5Page } from './d5.page';

describe('D5Page', () => {
  let component: D5Page;
  let fixture: ComponentFixture<D5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
