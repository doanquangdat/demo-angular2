import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  title: String = 'Attribute directives ngStyle and ngClass';
  check: Boolean = true;
  changeColor() {
    this.check = !this.check;
  }
  constructor() { }

  ngOnInit() {
  }

}
