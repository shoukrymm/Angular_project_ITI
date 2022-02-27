import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedClassesAndFiles/discountOffers';
import { iCategory } from '../sharedClassesAndFiles/iCategory';
import { iProduct } from '../sharedClassesAndFiles/iProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:iProduct[];
  categoryList:iCategory[];
  clientName:string;
  isPurshased:boolean=false;


  constructor() { 
    this.discount=DiscountOffers.Discount10;
    this.storeName="Lion Store";
    this.storeLogo="../../assets/logo.jpg";
    this.productList=[
      {
        id:1,
        name:"mobile",
        quantity:1,
        price:1000,
        image:""
      }
    ]
    this.categoryList=[
      {
        id:10,
        name:"mobiles"
      }
    ]
    this.clientName="ahmed"
    this.isPurshased=true
  }

  ngOnInit(): void {
  }


}


