import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioalunoComponent } from './formularioaluno.component';

describe('FormularioalunoComponent', () => {
  let component: FormularioalunoComponent;
  let fixture: ComponentFixture<FormularioalunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioalunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
