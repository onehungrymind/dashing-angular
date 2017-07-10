import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../common/models/client.model';

@Component({
  selector: 'app-client-portfolios',
  templateUrl: './client-portfolios.component.html',
  styleUrls: ['./client-portfolios.component.css']
})
export class ClientPortfoliosComponent {
  @Input() clients: Client[];
}
