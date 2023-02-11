/* import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo app is running!');
  });
});
 */

import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes: Estudiante[] = [
    { nombre: 'Fernando', curso: 'Angular', activo: true, notaMedia: 8.2 },
    { nombre: 'Gabriela', curso: 'Angular', activo: true, notaMedia: 2.2 },
    { nombre: 'Mizraim', curso: 'React', activo: false, notaMedia: 4.2 },
    { nombre: 'Pablo', curso: 'React', activo: true, notaMedia: 9.2 },
  ];

  agregarEstudiante(estudiante: Estudiante){
    this.estudiantes.push(estudiante);
  }
}