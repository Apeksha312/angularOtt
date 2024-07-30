import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string='';
  Password:string='';
  Email:string='';
  Address:string='';
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
OnSubmit(form:NgForm):void{
  console.log('Form Submitted',form.value);
  
}
isFormValid():boolean{
  return this.Username.trim()!==""&& this.Password.trim()!="";
}
OnSub(){
  this.route.navigate(['/register']);
}

}
