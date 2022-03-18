import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  departmentsList: any = [];
  modalTitle!: string;
  activateAddEditDepComp: boolean = false;
  dept: any;

  DepIdFilter: string = "";
  DepNameFilter: string = "";
  DepListWithoutFilter: any = [];

  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  addClick() {
    this.dept = {
      id: 0,
      name: ""
    }
    this.modalTitle = "Add Department";
    this.activateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.dept = item;
    this.modalTitle = "Edit Department";
    this.activateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure ?')) {
      this.publicService.deleteDepartment(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshDepartmentList();
      });
    }
  }

  closeClick() {
    this.activateAddEditDepComp = false;
    this.refreshDepartmentList();
  }

  refreshDepartmentList() {
    this.publicService.getDepartments().subscribe(data => {
      this.departmentsList = data;
      this.DepListWithoutFilter = data;
    })
  }

  filterfn() {
    var DepIdFilter = this.DepIdFilter;
    var DepNameFilter = this.DepNameFilter;
    this.departmentsList = this.DepListWithoutFilter.filter(function (el: any) {
      return el.id.toString().toLowerCase().includes(
        DepIdFilter.toString().trim().toLowerCase()
      ) &&
        el.name.toString().toLowerCase().includes(
          DepNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: any, asc: any) {
    this.departmentsList = this.DepListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }


}
