import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = 'Two way binding';
  messages: String[] = [];
  message: String = '';
  onclick() {
    this.messages.push(this.message);
    this.message = '';
  }
  constructor(private router: Router) { }

  ngOnInit() {
}

  gotoEmployee() {
    this.router.navigate(['employee']);
  }
}
