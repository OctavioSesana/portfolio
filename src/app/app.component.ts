import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component'; // <--- IMPORTAR
import { FooterComponent } from './components/footer/footer.component';   // <--- IMPORTAR

@Component({
  selector: 'app-root',
  standalone: true,
  // Agregar ContactComponent y FooterComponent a imports:
  imports: [HeroComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent], 
  template: `
    <main>
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact> </main>
    <app-footer></app-footer> `
})
export class AppComponent {}