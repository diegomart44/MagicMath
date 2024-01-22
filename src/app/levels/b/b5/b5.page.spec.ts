import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B5Page } from './b5.page';

describe('B5Page', () => {
  let component: B5Page;
  let fixture: ComponentFixture<B5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
