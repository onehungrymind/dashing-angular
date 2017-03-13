import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../common/models/portfolio.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent {
  @Input() portfolios: Array<Portfolio>;
  @Input() readOnly: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
}
