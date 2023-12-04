import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoInicioComponent } from './contacto-inicio.component';

describe('ContactoInicioComponent', () => {
  let component: ContactoInicioComponent;
  let fixture: ComponentFixture<ContactoInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoInicioComponent]
    });
    fixture = TestBed.createComponent(ContactoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
