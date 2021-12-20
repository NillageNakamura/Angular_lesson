import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
  ) {}

  // ngOnInit()は初期化後に呼び出されるメソッド
  ngOnInit() {
    this.productService.get(2).subscribe((product: Product) => {
      this.product = product;
    });
  }
}
