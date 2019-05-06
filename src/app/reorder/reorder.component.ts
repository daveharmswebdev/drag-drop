import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MarvelMoviesService } from '../services/movies.service';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss']
})
export class ReorderComponent implements OnInit, OnDestroy {
  public marvelMovies: string[];

  constructor(
    private movies: MarvelMoviesService
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.marvelMovies, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.marvelMovies = this.movies.getMovies();
  }

  ngOnDestroy() {
    this.movies.setMovies(this.marvelMovies);
  }
}
