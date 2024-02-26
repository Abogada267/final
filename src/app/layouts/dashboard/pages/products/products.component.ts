import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { Product } from './models';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'actions'];
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error: any) => {
        console.error('Error loading products:', error);
      },
    });
  }

  private async openProductDialog(product?: Product): Promise<Product | undefined> {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
    });

    return dialogRef.afterClosed().toPromise();
  }

  async onCreate(): Promise<void> {
    const result = await this.openProductDialog();

    if (result) {
      this.productsService.createProduct(result).subscribe({
        next: (updatedProducts: Product[]) => {
          this.products = updatedProducts;
        },
        error: (error: any) => {
          console.error('Error creating product:', error);
        },
      });
    }
  }

  async onEdit(product: Product): Promise<void> {
    const result = await this.openProductDialog(product);

    if (result) {
      this.productsService.updateProductById(product.id, result).subscribe({
        next: (updatedProducts: Product[]) => {
          this.products = updatedProducts;
        },
        error: (error: any) => {
          console.error('Error updating product:', error);
        },
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
      this.productsService.deleteProductById(id).subscribe({
        next: (updatedProducts: Product[]) => {
          this.products = updatedProducts;
        },
        error: (error: any) => {
          console.error('Error deleting product:', error);
        },
      });
    }
  }
}