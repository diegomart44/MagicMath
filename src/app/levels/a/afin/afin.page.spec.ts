import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfinPage } from './afin.page';

describe('AfinPage', () => {
  let component: AfinPage;
  let fixture: ComponentFixture<AfinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
