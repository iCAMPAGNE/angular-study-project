import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  templateUrl: './dynamic-styling.component.html',
  styleUrls: ['./dynamic-styling.component.scss']
})
export class DynamicStylingComponent {

  nummers:number[] = new Array(100).fill(0);

}
