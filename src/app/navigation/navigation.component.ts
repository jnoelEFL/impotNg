import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.styl'],
  providers: [NgbTabsetConfig]
})
export class NavigationComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'justified';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
