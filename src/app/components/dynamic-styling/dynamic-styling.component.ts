import { Component } from '@angular/core';
import {interval, map, Observable, take} from "rxjs";

class ServiceTwo {
}

@Component({
  selector: 'app-dynamic-styling',
  templateUrl: './dynamic-styling.component.html',
  styleUrls: ['./dynamic-styling.component.scss']
})
export class DynamicStylingComponent {

  backgroundColor: string = 'lightblue';
  message: string | undefined;
  info: string | undefined;

  inputText: string = 'Initial';

  _inputValue: string = '';

//  constructor(protected serviceTwo: ServiceTwo) { }

  ngOnInit(): void {
//    this.serviceTwo.functionInAbstractService();
  }

  message$: Observable<string> | undefined;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  //  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  get inputValue(): string {
    return this._inputValue + '!';
  }
  set inputValue(val: string) {
    this._inputValue = val + '?';
  }

  nummers:number[] = new Array(100).fill(0);

}
