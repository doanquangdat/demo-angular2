import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: String = 'Form validtion in angular 2';
  constructor() { }

  ngOnInit() {
  }
  getDataForm(value) {
    console.log(value);
  }

}
