import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
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
  }

}
