import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username="";
  password="";
  amount:number=0;

  constructor(private bankservice: BankService) { }

  ngOnInit(): void {
  }
  onUsernameChange(event:any){
    this.username=event.target.value;

  }
  onPasswordChange(event:any){
    this.password=event.target.value;

  }
  onAmountChange(event:any){
    this.amount=parseInt(event.target.value);
  }
  deposit(){
    this.bankservice.deposit(this.username,this.password,this.amount);

  }
  withdrawal(){
    this.bankservice.withdrawal(this.username,this.password,this.amount);
    

  }
  

}
