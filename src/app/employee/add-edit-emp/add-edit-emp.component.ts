import { Component, Input, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private pulicService: PublicService) { }

  @Input() emp: any;
  name!: string;
  id!: string;
  email!: string;
  phone!: string;
  salary!: string;
  hire_date!: string;
  job_position!: number;
  PositionsList: any = [];

  ngOnInit(): void {
    this.id = this.emp.id;
    this.name = this.emp.name;
    this.email = this.emp.email;
    this.phone = this.emp.phone;
    this.salary = this.emp.salary;
    this.hire_date = this.emp.hire_date;
    this.job_position = this.emp.job_position.id;
    this.loadPositionsList();
  }

  loadPositionsList() {
    this.pulicService.getAllPositionsNames().subscribe((data: any) => {
      this.PositionsList = data;
    })
  }

  addEmployee() {
    var val = { name: this.emp.name, email: this.emp.email, phone: this.emp.phone, salary: this.emp.salary, hire_date: this.emp.hire_date, job_position: this.job_position };
    this.pulicService.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = { id: this.emp.id, name: this.emp.name, email: this.emp.email, phone: this.emp.phone, salary: this.emp.salary, hire_date: this.emp.hire_date, job_position: this.job_position };
    this.pulicService.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
