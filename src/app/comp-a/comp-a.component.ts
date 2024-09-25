import { Component } from '@angular/core';
import { foodService } from '../food.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

   constructor(public foodService:foodService){
   }
   
   output = "";

   status = "";
   getVegFood(){
      this.output = this.foodService.getvegFoodList(); //veg-meals

      this.status = this.foodService.shownotification();
   }

}

