import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from 'src/app/services/project-manager.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  hits = [];

  constructor(
    private projectManager: ProjectManagerService,
    private modal: NgxSmartModalService,
  ) { }

  getData() {
    this.projectManager.getData().subscribe(data => {
      this.hits = data.hits;
    })
  }

  showDetails(hit) {
    this.modal.setModalData(hit, 'myModal');
    this.modal.getModal('myModal').open();
  }

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 10000)
  }

}
