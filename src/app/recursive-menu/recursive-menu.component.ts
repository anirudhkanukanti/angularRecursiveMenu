import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recursive-menu',
  templateUrl: './recursive-menu.component.html',
  styleUrls: ['./recursive-menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RecursiveMenuComponent implements OnInit {

  @Input() data;
  showChild = false;

  constructor() { }

  ngOnInit() {
  }

}
