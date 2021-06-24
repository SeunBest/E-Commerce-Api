import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './modules/pagination';
import { IProduct } from './modules/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Seun\'s store';
  products: IProduct[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:44314/api/products?pageSize=5').subscribe((response: IPagination) =>{
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  } 
}