import { Component, Input, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  @Input() dept: any;
  name!: string;
  id!: string;

  ngOnInit(): void {
  }

  addDepartment() {
    var val = { name: this.dept.name };
    this.publicService.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = { id: this.dept.id, name: this.dept.name };
    this.publicService.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
