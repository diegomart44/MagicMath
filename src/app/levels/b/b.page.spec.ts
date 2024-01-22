import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BPage } from './b.page';

describe('BPage', () => {
  let component: BPage;
  let fixture: ComponentFixture<BPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
