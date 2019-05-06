import { Component, OnInit, OnDestroy } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MarvelMoviesService } from '../services/movies.service';

@Component({
  selector: 'app-two-lists',
  templateUrl: './two-lists.component.html',
  styleUrls: ['./two-lists.component.scss']
})
export class TwoListsComponent implements OnInit, OnDestroy {
  public unaffiliated: string[];
  public avengers: string[];

  constructor(
    private movies: MarvelMoviesService
  ) { }

  ngOnInit() {
    this.unaffiliated = this.movies.getUnaffiliated();
    this.avengers = this.movies.getAvengers();
  }

  ngOnDestroy(): void {
    this.movies.setUnaffiliated(this.unaffiliated);
    this.movies.setAvengers(this.avengers);    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
