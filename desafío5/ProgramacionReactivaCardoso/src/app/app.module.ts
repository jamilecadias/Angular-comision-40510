import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoService } from './services/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';
import { env } from 'src/environment/environment';
import { config, token } from './config';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer - cópia/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ListaCursosComponent,
    TablaCursosComponent,
    EditarCursoDialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    // CursoService,
    // {provide: CursoService, useExisting: CursoAlphaService}
    // {provide: CursoService, useClass: CursoAlphaService}
    // {provide: CursoService, useValue: cursos}
    {provide: CursoService, useFactory: ()=>{
      if(env.utilizarServicioAlpha == 'Alpha'){
        return new CursoAlphaService()
      }else if(env.utilizarServicioAlpha == 'Legacy'){
        return cursos
      }else{
        return new CursoService()
      }
    }
    },
    { provide: token, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
