
import { PanelBet } from '../models/panel-bet.model';
import * as BetActions from './play.actions';

export interface BetsState {
    bets: PanelBet[];
}

const initialState: BetsState = {
    bets: [{ id: 1, bet: [] }, { id: 2, bet: [] }, { id: 3, bet: [] }, { id: 4, bet: [] }]
};

export function betReducer(
    state: BetsState = initialState,
    action: BetActions.BetActions
): BetsState {
    switch (action.type) {
        case BetActions.UPDATE_BETS:
            return {
                ...state,
                bets: [...state.bets].filter(panelBet => action.payload.id !== panelBet.id).concat([action.payload]).sort((a, b) => a.id - b.id)
            };
        default:
            return state;
    }
} 
