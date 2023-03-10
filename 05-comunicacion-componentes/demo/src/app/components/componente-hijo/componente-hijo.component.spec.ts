/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoComponent } from './componente-hijo.component';

describe('ComponenteHijoComponent', () => {
  let component: ComponenteHijoComponent;
  let fixture: ComponentFixture<ComponenteHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  @Input() estudiantesHijo!: Estudiante[];
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  nombre!: string;
  curso!: string;
  activo!: boolean;
  notaMedia!: number;

  agregarEstudiante(){
    let estudiante: Estudiante = {
      nombre: this.nombre,
      curso: this.curso,
      activo: this.activo,
      notaMedia: this.notaMedia
    };
    console.log("Estoy agregando un estudiante", estudiante);

    this.eventoSalidaEstudiante.emit(estudiante);
  }

  actualizarNombre(){
    console.log(this.nombre);
  }
}