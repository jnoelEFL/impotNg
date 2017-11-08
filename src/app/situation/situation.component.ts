import { Component, OnInit } from '@angular/core';

import { LISTSITFAM } from '../constantes/list-sit-fam.const';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.styl']
})
export class SituationComponent implements OnInit {

  listSitFams = LISTSITFAM;

  constructor() { }

  ngOnInit() {
  }

}
