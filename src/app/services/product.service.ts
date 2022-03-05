import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { iProduct } from '../sharedClassesAndFiles/iProduct';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) {
  }

  private url:string = "/assets/Data/products.json";
  getAllProducts():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this.url).pipe(catchError((err=>{
      return throwError(err.Message || "server fails")
    })))
  }

  // GetProductById(productId:number):any{
  //   return this.productList.find(x=>x.id == productId)?this.productList.find(x=>x.id == productId):null;
  // }
}
