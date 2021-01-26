import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  accountDetails: any = {

    userone: { acno: 1000, name: "ajay", balance: 10000, username: "userone", password: "testuser" },
    usertwo: { acno: 1001, name: "sajay", balance: 20000, username: "usertwo", password: "testuser1" },
    userthree: { acno: 1002, name: "vijay", balance: 25000, username: "userthree", password: "testuser2" },
  }
  log = (uname: string, pwd: string) => {        //static login===bank.login in html call cheyan vendi

    let dataset = this.accountDetails

    if (uname in dataset) {
      if (dataset[uname].password == pwd) {
        // alert("login successful")
        // this.router.navigateByUrl("/home");
        return 1;
      }
      else {
        // alert("incorrect password")
        return 0;
      }
    }
    else {
      // alert("no user exists with provided username")
      return -1;
    }

  }
  deposit = (uname:string, pwd:string ,amount:number) => {
    let user=this.log(uname,pwd);
    let dataset = this.accountDetails;
    if(user==1){
      dataset[uname].balance += amount;
      alert("Your account has been credited with"+ amount +"new balance"+ dataset[uname].balance)

    }
    else if(user==0){
      alert("password does not match")


    }
    else if(user==-1){
      alert("no username found !!!")
    }
    
  }
  withdrawal = (uname:string, pwd:string ,amount:number) => {
    let user=this.log(uname,pwd);
    let dataset = this.accountDetails;
    if(user==1){
      dataset[uname].balance -= amount;
      alert("Your account has been debited with"+ amount +"new balance" + dataset[uname].balance)

    }
    else if(user==0){
      alert("password does not match")


    }
    else if(user==-1){
      alert("no username found !!!")
    }
    
  }
}