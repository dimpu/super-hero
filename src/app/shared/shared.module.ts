import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AppHeaderComponent, LoadingIndicatorComponent, ContentHeaderComponent, SearchBarComponent],
  exports: [AppHeaderComponent, LoadingIndicatorComponent, SearchBarComponent, ContentHeaderComponent]
})
export class SharedModule { }
