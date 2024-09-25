import { Injectable } from "@angular/core";
import { notifyService } from "./notify.service";


@Injectable()
export class foodService {

    constructor(public notify:notifyService){}

    

    getvegFoodList() {
        return "veg-meals";
    }

    getnonvegFoodList() {
        return "non-vegFood";
    }

    shownotification(orderName:string = ""){
               //"Your Order has received.Thank You....."
       return  this.notify.sendNotification(orderName);
    }




}

