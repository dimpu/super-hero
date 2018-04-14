import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
 
  open = false;

  constructor() {
    // this.router.events.subscribe(() => {
    //   if (this.open) this.toggleOpen();
    // });
  }

  toggleOpen(): void {
    this.open = !this.open;
  }



  ngOnInit() {
  }

}
