import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AddOfferConfig} from '../configs/add-offer-config';

@Injectable()
export class AddOfferService {

	private header;
  options:RequestOptions;

  constructor(private http: Http) {
		this.header = new Headers();
		this.header.append('Authorization', localStorage.getItem("application-token"));
		this.options = new RequestOptions({headers: this.header});
	}

  getOffersList(){
    return this.http.get(AddOfferConfig.getURL+"megha@gmail.com/offers", this.options)
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));

  }

deleteOffer(offerId) {
  	return this.http.delete(AddOfferConfig.deleteOfferURL+offerId,this.options)
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  updateOffer(offerId) {
  	return this.http.put(AddOfferConfig.updateOfferURL+offerId, this.options)
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  putOffer(obj){

   return this.http.put(AddOfferConfig.updateOfferURL+obj.offerId,obj, this.options)
    .map(data => data.json(),
  (error: any)=>console.log("error"));
 }

  addNewOffer(obj){

   return this.http.post(AddOfferConfig.addOfferURL,obj, this.options)
    .map(data => data.json(),
  (error: any)=>console.log("error"));
}

couponValidateService(coupon){
  return this.http.get(AddOfferConfig.validateCouponUrl+coupon, this.options)
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}

changeFlag(obj) {
  return this.http.post(AddOfferConfig.couponFlagChangedUrl,obj, this.options)
    .map(data => data.json(),
  (error: any)=>console.log("error"));
}

putOffersInCarryBag(obj){
  return this.http.put(AddOfferConfig.updateOffersInCarryBag,obj, this.options)
  .map(data => data.json(),
(error: any)=>console.log("error"));
}


}
