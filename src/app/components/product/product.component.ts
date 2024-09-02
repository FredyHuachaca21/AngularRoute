import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  static products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 150 },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 200 },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: 250 },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: 300 }
  ];

  getProducts() {
    return ProductComponent.products;
  }

  getProductById(id: number) {
    return ProductComponent.products.find(product => product.id === id);
  }

}
