import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      nombre: 'Hatha Yoga',
      comision: 'noche',
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
      nombre: 'Vinyasa Yoga',
      comision: 'noche',
      profesor: {
        nombre: 'Luciana',
        correo: 'luciana@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Ashtanga Vinyasa Yoga',
      comision: 'tarde',
      profesor: {
        nombre: 'Tomás',
        correo: 'tomas@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Yoga para embarazadas',
      comision: 'mañana',
      profesor: {
        nombre: 'Fernanda',
        correo: 'fernanda@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$!: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }

  obtenerCursosPromise(): Promise<Curso[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
  }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
    console.log('Curso agregado', this.cursos);
  }
}
