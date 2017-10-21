import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural',
  templateUrl: './stuctural.component.html',
  styleUrls: ['./stuctural.component.css']
})
export class StucturalComponent implements OnInit {
  public check: Boolean = true;
  color: String = 'red';
  constructor() { }

  ngOnInit() {
  }

}
