import { Component, OnInit } from '@angular/core';

import { Address } from '../addres';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class myFormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }
}
