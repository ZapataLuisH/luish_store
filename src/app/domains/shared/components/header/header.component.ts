import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service'; // ajusta ruta

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public cartService: CartService) {}

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

  // 🔥 IMPORTANTE: usar el método correcto del service
  remove(product: any) {
    this.cartService.removeFromCart(product);
  }

}
