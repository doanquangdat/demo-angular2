import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: String = 'Input in angular 2';
  @Input('fullname') name: String = '';
  constructor() { }

  ngOnInit() {
  }

}
