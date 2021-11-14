import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstname:string='';
  lastname:string='';
  password:any='';
  gmail:any='';
  country:string='';
  constructor(){

  }
  ngOnInit(): void {
  
  }
 
  resetForm(formValue:NgForm){
    formValue.reset();
  }


  addlogin(formValue:NgForm){
    console.log(formValue.value)
  }
}


