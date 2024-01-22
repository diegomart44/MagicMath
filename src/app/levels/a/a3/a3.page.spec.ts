import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A3Page } from './a3.page';

describe('A3Page', () => {
  let component: A3Page;
  let fixture: ComponentFixture<A3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
