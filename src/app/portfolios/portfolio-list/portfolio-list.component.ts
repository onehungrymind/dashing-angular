import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Portfolio } from '../../common/models/portfolio.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit{
  @Input() portfolios: Array<Portfolio>;
  @Input() disableActions: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  isHome: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.isHome = this.route.routeConfig.path === 'home';
  }

  deletePortfolio(id, event) {
    event.stopPropagation();
    event.preventDefault();
    this.delete.emit(id);
  }
}

