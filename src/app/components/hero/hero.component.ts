import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  
  scrollToProjects() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }

  contactMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}