import { Component, OnInit } from '@angular/core';
import {user} from '../models/user';
import {FormControl,FormGroup,Validators, FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  public addPostFormGroup: FormGroup;
  

  public initializeForm(){
  this.addPostFormGroup=this.formBuilder.group({  
    id:[null,Validators.required],  
    userId:[null,Validators.required],
    title:[null,Validators.required],
    body:[null,Validators.required]    
  }); 
} 
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  submit():void
  {
    const postData = this.addPostFormGroup.getRawValue();
    console.log(" data :",postData);
  }

}
