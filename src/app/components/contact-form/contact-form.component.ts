import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm:FormGroup;
submitted:boolean = false;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(){
    this.contactForm = this._fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.email, Validators.required])],
      contact:['',Validators.required],
      course:['',Validators.required],
      message:[''],
    })
  }

  submit(){
    this.submitted = true;
    console.log(this.contactForm.value);
    
  }

}
