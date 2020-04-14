import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  demoList = [
    { label: 'RxJS', link: 'demos/rxjs' },
    { label: 'WebAPI', link: 'demos/web-api' },
    { label: 'forms', link: 'demos/forms' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
