import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para los inputs

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregamos FormsModule
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Truco sencillo: Abre el cliente de correo del usuario con los datos
    const subject = `Contacto de ${this.formData.name}`;
    const body = `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensaje:\n${this.formData.message}`;
    window.location.href = `mailto:octasesana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}