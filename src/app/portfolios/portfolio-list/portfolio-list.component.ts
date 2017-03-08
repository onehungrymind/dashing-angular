import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  @Input() portfolios: Array<any>;
  @Input() disableActions: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  deletePortfolio(id, event) {
    event.stopPropagation();
    event.preventDefault();
    this.delete.emit(id);
  }
}

