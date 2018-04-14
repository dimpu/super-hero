import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() section: string;
  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
