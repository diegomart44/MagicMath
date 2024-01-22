import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CPage } from './c.page';

describe('CPage', () => {
  let component: CPage;
  let fixture: ComponentFixture<CPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
