import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  employeesList: any = [];
  modalTitle!: string;
  activateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmployeesList();
  }

  addClick() {
    this.emp = {
      id: 0,
      name: "",
      email: "",
      phone: "",
      salary: "",
      hire_date: "",
      job_position: "",
    }
    this.modalTitle = "Add Employee";
    this.activateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.modalTitle = "Edit Employee";
    this.activateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure ?')) {
      this.publicService.deleteEmployee(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshEmployeesList();
      });
    }
  }

  closeClick() {
    this.activateAddEditEmpComp = false;
    this.refreshEmployeesList();
  }

  refreshEmployeesList() {
    this.publicService.getEmployee().subscribe(data => {
      this.employeesList = data;
    })

  }

}
