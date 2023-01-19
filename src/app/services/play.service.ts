import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  nrOfBets = 0;
  constructor() { }

  setNrOfBets(_nrOfBets:number){
    this.nrOfBets = _nrOfBets;
  }

  getResult(bets: Array<number>[]): Array<string> {
    return bets.map(bet => {
      if (bet.length === 0) {
        return 'empty'
      } else if (bet.length < this.nrOfBets) {
        const missing = this.nrOfBets - bet.length;
        return "Error: " + missing + " marks are missing";
      } else if (bet.length > this.nrOfBets) {
        const remove = bet.length - this.nrOfBets;
        return "Error: Please remove " + remove + " marks";
      } else {
        return [...bet].sort((a, b) => { return a - b }).join(", ");
      }
    })
  }
}
