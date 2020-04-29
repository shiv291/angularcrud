import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  contactForm: FormGroup;
  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() { }

  createFormGroup() {
    return new FormGroup({
     // email: new FormControl('', [Validators.required, Validators.email]),
      userId: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    // this.contactForm.get('mobile');
    console.log(this.contactForm);
  }
}
