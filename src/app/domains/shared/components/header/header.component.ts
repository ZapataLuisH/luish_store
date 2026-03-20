import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public cartService: CartService) {}

  // 🔥 NUEVO: estado para animación
  removing: any = null;

  // MOBILE MENU
  private mobileMenuHidden = signal(true);

  toggleMobileMenu() {
    this.mobileMenuHidden.update(v => !v);
  }

  hideMobileMenu() {
    return this.mobileMenuHidden();
  }

  // SIDE MENU
  private sideMenuHidden = signal(true);

  toogleSideMenu() {
    this.sideMenuHidden.update(v => !v);
  }

  hideSideMenu() {
    return this.sideMenuHidden();
  }

  // 🔥 AQUÍ ESTÁ LA MAGIA
  remove(product: any) {

    // activa animación
    this.removing = product;

    // espera animación y luego elimina
    setTimeout(() => {
      this.cartService.removeFromCart(product);
      this.removing = null;
    }, 300);

  }

}
