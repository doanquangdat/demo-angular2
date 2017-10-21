import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-overlink',
  templateUrl: './overlink.component.html',
  styleUrls: ['./overlink.component.css']
})
export class OverlinkComponent implements OnInit, OnDestroy {
  title: String = 'Over link component';
  public _id: number;
  public sub: any;
  constructor(private _router: Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._activateRoute.parent.params.subscribe(params => {
      this._id = params['id'];
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
