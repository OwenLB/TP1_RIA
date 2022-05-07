import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = {
    nom : "",
    description : "",
    prix : 0.00,
  };
  submitted = false;
  id!: string;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2];
    this.productService.get(this.id)
    .subscribe({
      next: (data) => {
          this.product = data;        
      },
      error: (e) => console.error(e)
    });
    
  }

  updateProduct(): void {
    const data = {
        data: {
        nom: this.product.nom,
        description: this.product.description,
        prix: this.product.prix,
        id_produit: this.product.id_produit,
      }
    };
    console.log(data);
    

    this.productService.update(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProduct(): void {
    this.product = {
      nom: "",
      description: "",
      prix: 0.00,
    };
  }

}
