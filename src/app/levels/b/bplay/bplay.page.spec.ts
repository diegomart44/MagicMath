import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BplayPage } from './bplay.page';

describe('BplayPage', () => {
  let component: BplayPage;
  let fixture: ComponentFixture<BplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
