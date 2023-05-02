import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  products: any = [];
  cartItems: number = 3;
  showAlert: boolean = false;

  constructor(private productsService: ProductsService) {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart() {
    this.cartItems++;
    this.showAlert = true;
    setTimeout(() => { this.showAlert= false }, 2000)
  }
}
