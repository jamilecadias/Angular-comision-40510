import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog
  ){}

  ngOnInit() {
    console.log("Paso 1");
    // this.cursoService.obtenerCursosPromise().then((cursos: Curso[])=>{
    //   console.log("Paso 2");
    //   this.cursos = cursos;
    // }).catch((error: any) => {
    //   console.log("Hubo un error en el Promise", error);
    // });
    // console.log("Paso 3");
    this.cursos$ = this.cursoService.obtenerCursosObservable();

  }
  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}
