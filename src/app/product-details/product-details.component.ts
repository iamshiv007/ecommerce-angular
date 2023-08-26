import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;

  productIdFromRoute: number;
  constructor(private actRoute: ActivatedRoute) {
    this.productIdFromRoute = this.actRoute.snapshot.params['productId'];
    this.product = products.find(
      (product) => product.id === Number(this.productIdFromRoute)
    );
  }
}
