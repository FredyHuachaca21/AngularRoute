import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent {

  product: any = null;

  constructor(private route: ActivatedRoute) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = ProductComponent.products.find(product => product.id === productId);
  }
}
