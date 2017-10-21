import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  public _id: number;
  public sub: any;
  dataEmployee: any;
  constructor(private router: Router, private _activeRouter: ActivatedRoute, private _rowEmployee: EmployeeService) { }

  ngOnInit() {
    this.sub = this._activeRouter.params.subscribe(params => {
      this._id = params['id'];
    });
    this._rowEmployee.getInfo(this._id).subscribe(data => {
      this.dataEmployee = data;
      console.log(this.dataEmployee);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoEmployee() {
    this.router.navigate(['employee']);
  }

}
