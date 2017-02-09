import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from "../../shared";

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  @Input() portfolios: Array<any>;
  @Input('disable-actions') disableActions: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  deletePortfolio(id, event) {
    event.stopPropagation();
    event.preventDefault();
    this.delete.emit(id);
  }
}

