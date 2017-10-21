import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  public employeeList: any[] = [];
  public pages: number[];
  public keyword: string;
  constructor(private __router: Router, private _listEmployee: EmployeeService) { }

  ngOnInit() {
    this._listEmployee.getList().subscribe((res: any) => {
      this.employeeList = res;
    }, error => {
      console.log(error);
    });
    this.pages = [1, 2, 3, 4, 5];
  }

  delete(id: number) {
    let confirmResult = confirm('Are you sure to delete employee?');
    if (confirmResult) {
      this._listEmployee.Delete(id).subscribe(res => {
        if (res) {
          alert('Delete success!');
          this.loadData();
        }
      })
    }
  }

  searching() {
    this._listEmployee.Search(this.keyword).subscribe((res: any) => {
      this.employeeList = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  loadData() {
    this._listEmployee.getList().subscribe((res: any) => {
      this.employeeList = res;
    }, error => {
      console.log(error);
    });
  }

}
