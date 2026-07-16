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
      title: 'YoBorracho - Conductor Designado',
      description: 'Plataforma web que conecta usuarios con conductores designados: pedís un conductor, viene hasta vos y te lleva a tu casa manejando tu propio auto. Incluye tracking en vivo por WebSockets, geolocalización y cálculo de rutas con Google Maps, precio fijo por viaje y autenticación con JWT. - Rol: Fullstack. - Tecnologías: React, Node.js, PostgreSQL, Socket.io, Docker.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      image: 'assets/images/yoborracho.png',
      demoUrl: 'https://yoborracho-api-frontend.onrender.com',
      codeUrl: 'https://github.com/OctavioSesana/yoborracho-api'
    },
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
      demoUrl: '',
      codeUrl: 'https://github.com/OctavioSesana/TPI---FootballGo'
    },
    {
      title: 'FinTrack - Gestor de Finanzas Personales',
      description: 'Aplicación web para la gestión de finanzas personales que permite registrar ingresos y gastos, visualizar balances y analizar transacciones por usuario autenticado. Incluye sistema de autenticación, manejo de sesiones y dashboard dinámico con métricas financieras. Desarrollado con Angular en el frontend y Node.js con base de datos relacional en el backend.',
      tags: ['Angular', 'Node.js', 'MySQL', 'Express', 'TypeScript'],
      image: 'assets/images/fin-track.png',
      demoUrl: 'https://finance-tracker-1ufhvtjwr-octavios-projects-0e658b85.vercel.app/login',
      codeUrl: 'https://github.com/OctavioSesana/finance-tracker'
    }
  ];
}