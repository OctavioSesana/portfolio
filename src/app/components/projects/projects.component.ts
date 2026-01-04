import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sistema de Gestión de Canchas Deportivas',
      description: 'Plataforma web para reservar canchas de fútbol. Incluye login de usuarios, gestión de reservas, ABM de canchas y estados. - Rol: Fullstack (Angular + NodeJS con MySQL).- Tecnologías: Angular, TypeScript, NodeJS, MikroORM, MySQL.',
      tags: ['Angular', 'Node.js', 'MySQL', 'Express', 'TypeScript'],
      image: 'assets/images/mis-canchas.png',
      demoUrl: 'https://frontend01-mis-canchas.vercel.app/',
      codeUrl: 'https://github.com/OctavioSesana/Backend01-MisCanchas'
    },
    {
      title: 'FootballGo - API.Rest',
      description: 'Sistema de gestión de empleados, equipos y partidos, desarrollado en C# con WinForms y SQL Server. - Rol: Fullstack (arquitectura multicapa, Entity Framework, persistencia de datos). - Tecnologías: C#, .NET, Entity Framework, SQL Server.',
      tags: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      image: 'assets/images/footballGo.png',
      demoUrl: '', // Si está vacío, ocultaremos el botón en el HTML
      codeUrl: 'https://github.com/OctavioSesana/TPI---FootballGo'
    },
    {
      title: 'App Clima - Python',
      description: 'Aplicación de escritorio en Python que consulta la API de OpenWeatherMap y muestra en tiempo real el clima de cualquier ciudad (nombre, temperatura y descripción). - Rol: Desarrollo completo (frontend en Tkinter + backend consumo API).',
      tags: ['Python', 'Tkinter', 'API'],
      image: 'assets/images/app-clima.png',
      demoUrl: '',
      codeUrl: ''
    }
  ];
}