import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in'))
    ])
  ]
})
export class PopupComponent implements OnInit {
  constructor() { }

  @Input()
  get message(): string {return this.localMessage; }
  set message(message) {
    this.localMessage = message;
    this.state = 'opened';
  }
  private localMessage: string;

  @HostBinding('@state') state: 'opened' | 'closed' = 'closed' ;

  @Output()
  closed = new EventEmitter();

  ngOnInit(): void {
  }
}
