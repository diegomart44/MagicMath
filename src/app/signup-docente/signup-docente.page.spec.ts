import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupDocentePage } from './signup-docente.page';

describe('SignupDocentePage', () => {
  let component: SignupDocentePage;
  let fixture: ComponentFixture<SignupDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
