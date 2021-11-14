import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  addloanTypeForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
  
  /*this.addloanTypeForm=new FormGroup({
    'loanname':new FormControl(),
    'loandescription':new FormControl()
  })*/
  this.addloanTypeForm= this.fb.group({ 
    'loanname':new FormControl('personalloan',[Validators.required,Validators.minLength(10)]),
  'loandescription':new FormControl('for laptop')

  })
  }
  addloanType(){
   console.log(this.addloanTypeForm.value)
  }

}
