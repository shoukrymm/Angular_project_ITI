import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
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
  errorMsg:any


  constructor(private service:ProductService) { 
    this.discount=DiscountOffers.NoDiscount;
    this.storeName="Lion Store";
    this.storeLogo="../../assets/logo.jpg";
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
    this.categoryList=[
      {
        id:10,
        name:"mobiles"
      },
      {
        id:20,
        name:"Laptops"
      },
      {
        id:30,
        name:"glasses"
      }
    ]
    this.clientName="ahmed"
    this.isPurshased=true
  }

  ngOnInit(): void {
    // this.service.getAllProducts.subscribe(productData=>{this.productList=productData},
    // error=>{this.errorMsg = error}  )
    this.service.getAllProducts().subscribe(
      productData => {
        this.productList=productData
      },
      error =>{
        this.errorMsg=error
      }
    )
  }

  showTable() {

    this.isPurshased = !this.isPurshased
    
  }

  RenderValues(){
    // this.productList = this.service.getAllProducts();
    this.isPurshased = false;
  }

}


