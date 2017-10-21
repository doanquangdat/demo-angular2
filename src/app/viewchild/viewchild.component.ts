import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  title: String = 'View child in angular2';
  @ViewChild('nameinput') name: ElementRef;
  constructor() { }

  ngOnInit() {
    this.name.nativeElement.focus();/*su dung khi muon goi API de lay du lieu*/
  }

  sayhello() {
    console.log('Say hello: ' + this.name.nativeElement.value);
  }
}
