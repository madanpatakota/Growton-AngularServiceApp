import { Injectable } from "@angular/core";


@Injectable()
export class notifyService {

    sendNotification(orerName:string){
        return `Your Order ${orerName} has received.Thank You.....`;
    }


}
