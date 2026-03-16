import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  successMessage = false;

  submitForm(event: Event) {

    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString()
    })
    .then(() => {

      this.successMessage = true;

      form.reset();

      setTimeout(() => {
        this.successMessage = false;
      }, 4000);

    })
    .catch(() => {
      alert("Error enviando el mensaje");
    });

  }

}
