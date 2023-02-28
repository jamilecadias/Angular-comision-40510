import { Curso } from "../models/curso";

export const cursos = {
    obtenerCursos: () => {
        return [
            {
              nombre: 'Hatha Yoga - utilizando UseValue',
              comision: '49533',
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
              nombre: 'Vinyasa Yoga- utilizando UseValue',
              comision: '42523',
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
              nombre: 'Ashtanga Vinyasa Yoga - utilizando UseValue',
              comision: '42433',
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
              nombre: 'Yoga para embarazadas - utilizando UseValue',
              comision: '49536',
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
    },
    agregarCurso: (curso: Curso) => {
      console.log('Agregando curso desde curso.data.ts');
    }
}
