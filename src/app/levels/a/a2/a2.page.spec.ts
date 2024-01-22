import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A2Page } from './a2.page';

describe('A2Page', () => {
  let component: A2Page;
  let fixture: ComponentFixture<A2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
