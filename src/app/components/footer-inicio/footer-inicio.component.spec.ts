import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInicioComponent } from './footer-inicio.component';

describe('FooterInicioComponent', () => {
  let component: FooterInicioComponent;
  let fixture: ComponentFixture<FooterInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterInicioComponent]
    });
    fixture = TestBed.createComponent(FooterInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
