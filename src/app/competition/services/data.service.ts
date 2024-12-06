import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bet$ = new Subject<number>();
  selection = new Subject<Game>();

  constructor() { }

  updateBet(val: number) {
    this.bet$.next(val);
  }
}
