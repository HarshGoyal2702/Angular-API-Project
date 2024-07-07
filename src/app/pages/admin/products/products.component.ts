import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']  // Corrected styleUrls
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: "",
    productName: "",
    productPrice: 0,
    productShortName: "",
    productDescription: "",
    createdDate: "",
    deliveryTimeSpan: "",
    categoryId: 0,
    productImageUrl: ""
  };

  categoryList: { categoryId: number, categoryName: string }[] = [];  // Added type

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.productSrv.getCategory().subscribe(
      (res: any) => {
        if (res && res.data) {
          this.categoryList = res.data;
        }
      },
      (error: any) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  openSidePanel(): void {
    this.isSidePanelVisible = true;
  }

  closeSidePanel(): void {
    this.isSidePanelVisible = false;
  }
}
