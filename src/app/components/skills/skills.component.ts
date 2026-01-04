import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  // Datos de las tarjetas azules
  features = [
    {
      icon: 'fa-code', // Icono de código
      title: 'Desarrollo',
      desc: 'Experiencia sólida en TypeScript, Angular y Node.js para construir aplicaciones web escalables y mantenibles.'
    },
    {
      icon: 'fa-layer-group', // Icono de diseño/capas (Axure)
      title: 'Diseño & Prototipado',
      desc: 'Capacidad para crear prototipos de alta fidelidad (Axure RP) y traducir requerimientos complejos en interfaces intuitivas.'
    },
    {
      icon: 'fa-rocket', // Icono de rendimiento
      title: 'Optimización',
      desc: 'Enfoque en código limpio, bases de datos eficientes (SQL) y metodologías ágiles para asegurar el mejor rendimiento.'
    }
  ];

  // Tu información personal real
  personalInfo = [
    { label: 'Nombre', value: 'Octavio Sesana' },
    { label: 'Email', value: 'octasesana@gmail.com' },
    { label: 'Ubicación', value: 'Rosario, Argentina' },
    { label: 'Disponibilidad', value: 'En búsqueda laboral / disponible para proyectos' },
  ];
}