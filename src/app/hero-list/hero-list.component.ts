import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HeroActions from '../store/hero/hero.actions';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.FetchHeros());
  }

}
