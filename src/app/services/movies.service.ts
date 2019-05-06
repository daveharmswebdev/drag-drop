import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelMoviesService {
  private movies: string[] = [
    'Thor',
    'Captain America: Winter Soldier',
    'Captain America: Civil War',
    'Iron Man',
    'Iron Man 2',
    'Iron Man 3',
    'Spider Man: Homecoming'
  ];

  private avengers: string[] = [];
  private unaffiliated: string[] = [
    'Captain America',
    'Iron Man',
    'Thor',
    'Incredible Hulk',
    'Hawkeye',
    'Black Widow'
  ];

  setMovies(movies: string[]) {
    this.movies = movies;
  }

  getMovies() {
    return this.movies;
  }

  setAvengers(avengers: string[]) {
    this.avengers = avengers;
  }

  getAvengers() {
    return this.avengers;
  }

  setUnaffiliated(unaffiliated: string[]) {
    this.unaffiliated = unaffiliated;
  }
  
  getUnaffiliated() {
    return this.unaffiliated;
  }
}