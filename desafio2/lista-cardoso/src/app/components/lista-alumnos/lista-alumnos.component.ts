import { Component } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  alumnos: Alumnos[] = [
    {
      nombre: 'Mariana López',
      curso: 'Francés',
      nivel: 2,
      activo: true

    },{
      nombre: 'Pedro Lins',
      curso: 'Inglés',
      nivel: 1,
      activo: true

    },{
      nombre: 'Karina Acevedo',
      curso: 'Aleman',
      nivel: 3,
      activo: false

      },{
      nombre: 'Pablo Smith',
      curso: 'Portugués',
      nivel: 4,
      activo: false

    }
  ]
}
