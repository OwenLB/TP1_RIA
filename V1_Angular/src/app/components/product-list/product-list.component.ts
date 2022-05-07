import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  title = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(this.products);
        },
        error: (e) => console.error(e)
      });      
  }

  deleteProduct(id: number | undefined): void {
    console.log(id);

      this.productService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getProducts();
        },
        error: (e) => console.error(e)
      });
  }

  edit(id: number | undefined) {
    this.router.navigate(['/product/' + id]);
  }

  setActiveProduct(tutorial: Product, index: number): void {
    this.currentProduct = tutorial;
    this.currentIndex = index;
  }


  

}
