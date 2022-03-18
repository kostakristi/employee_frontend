import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-show-pos',
  templateUrl: './show-pos.component.html',
  styleUrls: ['./show-pos.component.css']
})
export class ShowPosComponent implements OnInit {

  constructor(private publicService: PublicService) { }

  positionsList: any = [];
  modalTitle!: string;
  activateAddEditPosComp: boolean = false;
  pos: any;

  ngOnInit(): void {
    this.refreshPositionsList();
  }

  addClick() {
    this.pos = {
      id: 0,
      name: "",
      department: "",
    }
    this.modalTitle = "Add Job Position";
    this.activateAddEditPosComp = true;
  }

  editClick(item: any) {
    this.pos = item;
    this.modalTitle = "Edit Job Position";
    this.activateAddEditPosComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure ?')) {
      this.publicService.deleteJobPosition(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshPositionsList();
      });
    }
  }

  closeClick() {
    this.activateAddEditPosComp = false;
    this.refreshPositionsList();
  }

  refreshPositionsList() {
    this.publicService.getJobPosition().subscribe(data => {
      this.positionsList = data;
    })

  }

}
