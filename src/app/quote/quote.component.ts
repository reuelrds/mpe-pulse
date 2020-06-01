import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'marsh-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      company: '',
      address: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  submitForm() {
    console.log(this.contactForm.value);
  }

}
