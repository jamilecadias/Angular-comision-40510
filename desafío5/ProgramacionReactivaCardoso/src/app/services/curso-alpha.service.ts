import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoAlphaService {
  private cursos: Curso[] = [
    {
      nombre: 'Hatha Yoga - Alpha',
      comision: 'mañana',
      profesor: {
        nombre: 'Alejandra',
        correo: 'alejandra@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Vinyasa Yoga - Alpha',
      comision: 'tarde',
      profesor: {
        nombre: 'Luciana',
        correo: 'luciana@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];

  constructor() { }

  obtenerCursos(): Array<Curso>{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    curso.nombre = 'Hatha Yoga (Prueba Curso Service Alpha)';
    this.cursos.push(curso);
    console.log('Curso agregado', this.cursos);
  }
}
