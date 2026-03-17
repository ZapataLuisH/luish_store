import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import {ProductComponent} from '@products/components/product/product.component'
import { NotificationService } from '@shared/services/notification.service';
import { RouterLinkWithHref } from '@angular/router';
import {Product} from '@shared/models/product.model';
import {HeaderComponent} from '@shared/components/header/header.component'
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private notification = inject(NotificationService);
  @Input() category_id?: string;

  ngOnInit(){

    this.getCategories();
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges){
  if(changes['category_id']){
    this.getProducts();
  }
}



  addToCart(product: Product){
    this.cartService.addtoCart(product);
    this.notification.show(`"${product.title}" agregado al carrito 🛒`);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
      }
    })
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {
      }
    })
  }

  contactWhatsApp(){
  const phone = '573227358997'; // tu número

  const message = encodeURIComponent(
    'Hola, tengo una consulta sobre tus productos 👋'
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, '_blank');
}

}
