import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DPage } from './d.page';

describe('DPage', () => {
  let component: DPage;
  let fixture: ComponentFixture<DPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
