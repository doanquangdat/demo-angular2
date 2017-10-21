import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers: [EmployeeService]
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
  title: String = 'Employee edit';
  public _id: number;
  public sub: any;
  public employee: any;
  constructor(private _router: Router, private _activateRoute: ActivatedRoute, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.sub = this._activateRoute.params.subscribe(params => {
      this._id = params['id'];
    }, error => {
      console.log(error);
    });

    this._employeeService.getInfo(this._id).subscribe(data => {
      this.employee = data;
    });
  }
  saveData() {
    this._employeeService.Update(this._id, this.employee).subscribe(res => {
      if (res) {
        alert('Save success!');
        this._router.navigate(['employee']);
      }
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
