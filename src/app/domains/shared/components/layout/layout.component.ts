
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from '@shared/components/header/header.component';
import { ToastComponent } from '@shared/components/toast/toast.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule, ToastComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
