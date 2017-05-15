import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-client-ui',
  templateUrl: './client-ui.component.html',
  styleUrls: ['./client-ui.component.css']
})
export class ClientUiComponent implements OnInit {
  @ViewChild('btn') btn;
  message: string;

  ngOnInit() {
    Observable.fromEvent(this.getNativeElement(this.btn), 'click')
      .subscribe(result => this.message = 'Beast Mode Activated!');
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
