import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
