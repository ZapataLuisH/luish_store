import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router) {}

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
      this.router.navigate(['/thanks']);
    })
    .catch(() => {
      alert("Error enviando el mensaje");
    });

  }

}