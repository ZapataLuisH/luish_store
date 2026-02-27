import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import {CommonModule} from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  zoomActive = false;
  backgroundPosition = 'center';
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(){
    if (this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0){
            this.cover.set(product.images[0])
          }
        }
      })
    }

  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addtoCart(product);
    }

  }

  onMouseMove(event: MouseEvent) {
  if (window.innerWidth < 1024) return; // solo desktop

    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.zoomActive = true;
    this.backgroundPosition = `${x}% ${y}%`;
  }

  onMouseLeave() {
    this.zoomActive = false;
    this.backgroundPosition = 'center';
  }

}
