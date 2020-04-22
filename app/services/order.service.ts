import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products:ProductResponseModel[] = [];
  private serverUrl = environment.SERVER_URL;

  constructor(private http:HttpClient) { }

  getSingleOrder(orderId: number){
    //Here toPromise() is used instead of observable and subscribe.
    return this.http.get<ProductResponseModel[]>(this.serverUrl + '/orders/' + orderId).toPromise();
  }
}

interface ProductResponseModel {
  id : number;
  title : string;
  description : string;
  price : number;
  quantityOrdered : number;
  image : string;

}
