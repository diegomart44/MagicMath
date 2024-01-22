import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B3Page } from './b3.page';

describe('B3Page', () => {
  let component: B3Page;
  let fixture: ComponentFixture<B3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
