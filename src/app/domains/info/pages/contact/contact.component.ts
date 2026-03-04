import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <div class="text-center py-20">
      <h1 class="text-2xl font-bold text-green-600">
        ✅ Mensaje enviado correctamente
      </h1>
      <p class="mt-4">Redirigiendo...</p>
    </div>
  `
})
export class ThanksComponent {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/contact']);
    }, 2000);
  }
}
