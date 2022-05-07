import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { AddProductComponent } from './components/add-product/add-product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD Product';
  // constructor(private  dialogRef : MatDialog) { }
  // openAddDialog(){
  //   this.dialogRef.open(AddProductComponent);
  // }

  

}
