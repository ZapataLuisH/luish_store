import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // MOBILE MENU
  private mobileMenuHidden = signal(true);

  toggleMobileMenu() {
    this.mobileMenuHidden.update(v => !v);
  }

  hideMobileMenu() {
    return this.mobileMenuHidden();
  }

  // CART SIDE MENU
  private sideMenuHidden = signal(true);

  toogleSideMenu() {
    this.sideMenuHidden.update(v => !v);
  }

  hideSideMenu() {
    return this.sideMenuHidden();
  }

  // CART
  cart = signal<any[]>([]);

  remove(product: any) {
    this.cart.update(cart => cart.filter(p => p !== product));
  }

  total = computed(() =>
    this.cart().reduce((sum, product) => sum + product.price, 0)
  );

  checkout() {
    alert('Checkout no implementado aún');
  }

}
