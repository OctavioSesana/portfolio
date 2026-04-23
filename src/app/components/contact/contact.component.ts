import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactItems = [
    {
      icon: 'fa-envelope',
      iconBg: 'linear-gradient(135deg, #c026d3, #7c3aed)',
      label: 'Email',
      value: 'octasesana@gmail.com'
    },
    {
      icon: 'fa-map-marker-alt',
      iconBg: 'linear-gradient(135deg, #0891b2, #2563eb)',
      label: 'Ubicación',
      value: 'Rosario, Argentina'
    },
    {
      icon: 'fa-comments',
      iconBg: 'linear-gradient(135deg, #db2777, #ec4899)',
      label: 'Disponibilidad',
      value: 'Respondo en 24-48h'
    }
  ];

  formData = { name: '', email: '', message: '' };

  submitForm() {
    const subject = `Contacto de ${this.formData.name}`;
    const body = `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensaje:\n${this.formData.message}`;
    window.location.href = `mailto:octasesana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
