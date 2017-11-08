import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.styl']
})
export class ModalInfoComponent {

  env = environment.env;
  dateVersion = environment.dateVersion;

  constructor(public activeModal: NgbActiveModal) {}

}
