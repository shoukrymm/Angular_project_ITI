import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../Validators/confirmPassword.validator';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss']
})
export class RegisterationFormComponent implements OnInit {

  // registerationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     street:new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // })
  constructor(private fb:FormBuilder) { }

  registerationForm = this.fb.group({
    userName: ['',Validators.required],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    address:this.fb.group({
      city:[''],
      street:[''],
      postalCode: [''],
    })
  },{validator:[confirmPasswordValidator]})

  ngOnInit(): void {
  }

  loadData(){
    // this.registerationForm.setValue({
    //   userName:"ahmed",
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     city:'mansoura',
    //     street:'talkha',
    //     postalCode:'5555'
    //   }
    // })
    this.registerationForm.patchValue({
      userName:"ahmed",
      // password:'123',
      // confirmPassword:'123',
      address:{
        city:'mansoura',
        street:'talkha',
        postalCode:'5555'
      }
    })
  }

  setEmailValidator(){
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      const email=this.registerationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required)
      }
      else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })
  }


}
