import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D1Page } from './d1.page';

describe('D1Page', () => {
  let component: D1Page;
  let fixture: ComponentFixture<D1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
