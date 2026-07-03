import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public cartService: CartService) {}
  private http = inject(HttpClient);

  // Estado para animación
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

  // 🔥 OPCION PRINCIPAL
  remove(product: any) {

    // activa animación
    this.removing = product;

    // espera animación y luego elimina
    setTimeout(() => {
      this.cartService.removeFromCart(product);
      this.removing = null;
    }, 300);

  }

  checkout() {

    const cart = this.cartService.cart();

    if (cart.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }

    this.http.post('https://api-store-pfjt.onrender.com/create-payment', { cart })
      .subscribe({

        next: (response) => {

          console.log('Respuesta backend:', response);

          // 🔥 REDIRECCIONAR A MERCADOPAGO
          window.location.href = response.url;

        },

        error: (err) => {
          console.error('Error en checkout:', err);
        }

      });

  }

}
