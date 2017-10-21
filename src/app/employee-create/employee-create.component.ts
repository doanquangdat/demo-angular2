import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [EmployeeService]
})
export class EmployeeCreateComponent implements OnInit {
  title: String = 'Create employee';
  public sub: any;
  employee: any;
  constructor(private __router: Router, private __employeeService: EmployeeService) { }
  ngOnInit() {
  }
  addData(value: any) {
    this.employee = value;
    console.log(this.employee);
    this.__employeeService.Create(this.employee).subscribe(res => {
        if (res) {
          alert('Create data success!');
          this.__router.navigate(['/employee']);
        } else {
          alert('Create data success!');
        }
    })
  }
}
