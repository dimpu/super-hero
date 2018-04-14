import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// ngrx
import { reducers, metaReducers } from './store/reducers';
import { HeroEffects } from './store/effects/hero.effects';

// components
import { SharedModule } from './shared/shared.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AppComponent } from './app.component';

// db
import { InMemHeroService } from './in-memory-db/db';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    EffectsModule.forRoot([HeroEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
