import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  originalName;
  currentClient;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set client(value) {
    if (value) { this.originalName = value.name; }
    this.currentClient = Object.assign({}, value);
  }
}
