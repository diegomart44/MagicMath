import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CplayPage } from './cplay.page';

describe('CplayPage', () => {
  let component: CplayPage;
  let fixture: ComponentFixture<CplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
