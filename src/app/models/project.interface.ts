export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string; // Ruta a assets/img o URL externa
  repoLink?: string; // Opcional por si es privado
  demoLink?: string; // Opcional
}