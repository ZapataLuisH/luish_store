import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private route = inject(ActivatedRoute);

  success = false;

  constructor() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.success = true;
        setTimeout(() => this.success = false, 5000);
      }
    });
  }
}
