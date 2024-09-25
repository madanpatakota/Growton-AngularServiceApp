import { Component } from '@angular/core';
import { foodService } from '../food.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent {

  constructor(public fd:foodService){

  }


  // Abc abc = new abc();
  // abc.method1()

  
  opt = "";
  alertMessage = "";
  getnonVegFood(){
     this.opt = this.fd.getnonvegFoodList(); //veg-meals

     this.alertMessage = this.fd.shownotification(this.opt);
      //notificaiton
      //window.alert(this.alertMessage);
  }



}
