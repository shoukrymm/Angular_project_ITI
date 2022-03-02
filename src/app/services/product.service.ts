import { Injectable } from '@angular/core';
import { iProduct } from '../sharedClassesAndFiles/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList:iProduct[];

  constructor() {
    this.productList=[
      {
        id:1,
        name:"IPhone",
        quantity:1,
        price:1000,
        image:"../../assets/iphone.jpg"
      },
      {
        id:2,
        name:"Samsung",
        quantity:2,
        price:2000,
        image:"../../assets/samsung.jpg"
      },
      {
        id:3,
        name:"Dell",
        quantity:3,
        price:3000,
        image:"../../assets/dell.jpg"
      },
      {
        id:4,
        name:"HP",
        quantity:4,
        price:4000,
        image:"../../assets/hp.png"
      },
  
    ]
  }

  getAllProducts(){
    return this.productList;
  }

  GetProductById(productId:number):any{
    return this.productList.find(x=>x.id == productId)?this.productList.find(x=>x.id == productId):null;
  }
}
