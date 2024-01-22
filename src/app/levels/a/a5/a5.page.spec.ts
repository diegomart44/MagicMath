import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A5Page } from './a5.page';

describe('A5Page', () => {
  let component: A5Page;
  let fixture: ComponentFixture<A5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
