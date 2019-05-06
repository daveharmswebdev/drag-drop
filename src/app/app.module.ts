import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragBoundaryComponent } from './drag-boundary/drag-boundary.component';
import { ReorderComponent } from './reorder/reorder.component';
import { MarvelMoviesService } from './services/movies.service';
import { TwoListsComponent } from './two-lists/two-lists.component';

@NgModule({
  declarations: [AppComponent, DragBoundaryComponent, ReorderComponent, TwoListsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    MarvelMoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
