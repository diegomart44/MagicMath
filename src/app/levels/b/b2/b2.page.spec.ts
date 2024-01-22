import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page } from './b2.page';

describe('B2Page', () => {
  let component: B2Page;
  let fixture: ComponentFixture<B2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
