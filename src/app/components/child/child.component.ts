import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item: string | undefined; // decorate the property with @Input()

  // @ViewChildren

}
