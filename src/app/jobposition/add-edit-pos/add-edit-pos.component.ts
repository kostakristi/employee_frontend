import { Component, Input, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-add-edit-pos',
  templateUrl: './add-edit-pos.component.html',
  styleUrls: ['./add-edit-pos.component.css']
})
export class AddEditPosComponent implements OnInit {

  constructor(private publicService: PublicService) { }
  @Input() pos: any;
  name!: string;
  id!: string;
  department!: number;
  DepartmentsList: any = [];

  ngOnInit(): void {
    this.id = this.pos.id;
    this.name = this.pos.name;
    this.department = this.pos.department.id;
    this.loadDepartmentsList();
  }

  loadDepartmentsList() {
    this.publicService.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;
    })
  }

  addPosition() {
    var val = { name: this.pos.name, department: this.department };
    this.publicService.addJobPosition(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updatePosition() {
    var val = { id: this.pos.id, name: this.pos.name, department: this.department };
    this.publicService.updateJobPosition(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
