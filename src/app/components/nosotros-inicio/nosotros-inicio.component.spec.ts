import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosInicioComponent } from './nosotros-inicio.component';

describe('NosotrosInicioComponent', () => {
  let component: NosotrosInicioComponent;
  let fixture: ComponentFixture<NosotrosInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosotrosInicioComponent]
    });
    fixture = TestBed.createComponent(NosotrosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
