import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent {
  
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      profesor: 'Abner',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: false

    },{
      nombre: 'ReactJs',
      profesor: 'Mizraim',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: false

    },{
      nombre: 'VueJs',
      profesor: 'Lucas',
      estudiantes: [],
      inscripcionAbierta: true

    },{
      nombre: 'NodeJs',
      profesor: 'Angeles',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: true

    }
  ]

}
