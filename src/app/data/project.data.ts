import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Marketplace de Reciclaje "Segunda Vida"',
    description: 'Plataforma web para conectar donantes de materiales reciclables con recolectores. Arquitectura RESTful y diseño modular.',
    techStack: ['Angular', 'Node.js', 'Express', 'MySQL'],
    imageUrl: 'assets/images/marketplace-mockup.jpg', // ¡Asegúrate de poner una imagen aquí!
    repoLink: 'https://github.com/tu-usuario/proyecto-reciclaje'
  },
  {
    id: 2,
    title: 'Simulación Aeropuerto LAX',
    description: 'Modelo de simulación para optimizar flujos de pasajeros y reducir tiempos de espera, analizando variables estocásticas.',
    techStack: ['AnyLogic', 'Java', 'Excel Statistics'],
    imageUrl: 'assets/images/anylogic-sim.jpg'
  },
  {
    id: 3,
    title: 'Sistema de Gestión (Agenda)',
    description: 'Prototipo de alta fidelidad para sistema de gestión de turnos y agenda.',
    techStack: ['Axure RP 11', 'UX/UI Design'],
    imageUrl: 'assets/images/axure-proto.jpg'
  }
];