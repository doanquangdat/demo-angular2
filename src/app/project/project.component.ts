import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title: String = 'Project component in angular 2';
  constructor() { }

  ngOnInit() {
  }

}
