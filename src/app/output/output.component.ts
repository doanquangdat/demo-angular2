import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  title: String = 'Output component in angular2';
  @Input('check') checked: Boolean = false;
  @Input('img_url') images: String = '';
  @Output('tick') kick = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  changeValue(event){
    this.kick.emit(event.target.checked);
  }
}
