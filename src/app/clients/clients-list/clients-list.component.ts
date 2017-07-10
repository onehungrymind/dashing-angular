import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  @Input() clients;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
