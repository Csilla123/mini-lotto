import { Injectable } from '@angular/core';
import { Field } from '../models/field.model';
import { PanelBet } from '../models/panel-bet.model';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor() { }

  getRandomBet(arrayLength: number, maxNumber: number): Array<number> {
    const randomBet = new Set<number>();
    while (randomBet.size < arrayLength) {
      randomBet.add(Math.floor(Math.random() * maxNumber) + 1);
    }
    return [...randomBet];
  }

  updateFields(bets: Array<number>, fields: Array<Field>): Array<Field> {
    return fields.map(field => {
      const found = bets.find(bet => bet === field.value);
      found ? field.selected = true : field.selected = false;
      return field;
    })
  }

  setPanelBet(panelBet: PanelBet, fields: Array<Field>): PanelBet {
    const bets = fields.filter(field => field.selected === true).map(field => field.value);
    return {
      id: panelBet.id,
      bet: bets
    }
  }
}
