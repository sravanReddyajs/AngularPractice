import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpractice';
  inputNumber : number;
  isPrimeNumber : boolean ;
  showResult:boolean;
  constructor(){

  }
  checkPrimeNumberOrNot(){
    let flag:number = 0;
    this.showResult =true;
    for(let i=2; i<= this.inputNumber ;i++){
      if(this.inputNumber % i === 0){
        flag++;
      }
    }
    if(flag === 1){
      this.isPrimeNumber = true;
    }else{
      this.isPrimeNumber = false;
    }

  }


  disableResults(){
    this.showResult = false;
  }
}
