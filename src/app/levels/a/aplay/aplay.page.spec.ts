import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AplayPage } from './aplay.page';

describe('AplayPage', () => {
  let component: AplayPage;
  let fixture: ComponentFixture<AplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
