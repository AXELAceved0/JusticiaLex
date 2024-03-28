import { Component } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {
  estudiantes = [
    { nombre: 'Gonzalo', nota: 70 },
    { nombre: 'Lucas', nota: 85 },
    { nombre: 'Anahis', nota: 60 },
    { nombre: 'Alexis', nota: 40 },
    { nombre: 'Alexis', nota: 55 },
    { nombre: 'Alexis', nota: 90 },
    { nombre: 'Mario', nota: 75 },
    { nombre: 'Dora', nota: 30 }
  ];

  mostrarListado = false;

  esAprobado(nota: number): boolean {
    return nota >= 60;
  }
}
