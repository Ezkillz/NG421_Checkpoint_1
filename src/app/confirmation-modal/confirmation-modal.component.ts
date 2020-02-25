import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { ResetService} from '../services/reset.service'


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  modalInstance: NgbModalRef;
  constructor(private reset:ResetService) { }

  ngOnInit() {} 

  yes(){
    this.modalInstance.close("yes");
    this.reset.resetView();
 }

}
