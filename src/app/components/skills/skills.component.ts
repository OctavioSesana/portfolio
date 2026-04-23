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

  stats = [
    { number: '3+', label: 'Años', sub: 'de experiencia' },
    { number: '10+', label: 'Proyectos', sub: 'completados' },
    { number: '5+', label: 'Tecnologías', sub: 'dominadas' },
    { number: '100%', label: 'Dedicación', sub: 'en cada proyecto' },
  ];

  skills = [
    {
      icon: 'fa-code',
      iconBg: 'linear-gradient(135deg, #c026d3, #7c3aed)',
      title: 'Frontend Development',
      dividerColor: 'linear-gradient(90deg, #c026d3, #7c3aed)',
      tags: ['Angular', 'TypeScript', 'HTML/CSS', 'SCSS']
    },
    {
      icon: 'fa-database',
      iconBg: 'linear-gradient(135deg, #0891b2, #2563eb)',
      title: 'Backend Development',
      dividerColor: 'linear-gradient(90deg, #0891b2, #2563eb)',
      tags: ['Node.js', 'Express', 'C#', '.NET']
    },
    {
      icon: 'fa-layer-group',
      iconBg: 'linear-gradient(135deg, #db2777, #ec4899)',
      title: 'Diseño & Prototipado',
      dividerColor: 'linear-gradient(90deg, #db2777, #ec4899)',
      tags: ['Figma', 'Axure RP', 'UI/UX', 'Wireframing']
    },
    {
      icon: 'fa-server',
      iconBg: 'linear-gradient(135deg, #d97706, #f59e0b)',
      title: 'Bases de Datos',
      dividerColor: 'linear-gradient(90deg, #d97706, #f59e0b)',
      tags: ['MySQL', 'SQL Server', 'MikroORM', 'Entity Framework']
    },
  ];

  personalInfo = [
    { label: 'Nombre Completo', value: 'Octavio Sesana' },
    { label: 'Email', value: 'octasesana@gmail.com' },
    { label: 'Ubicación', value: 'Rosario, Argentina' },
    { label: 'Disponibilidad', value: 'Disponible para proyectos' },
  ];
}
