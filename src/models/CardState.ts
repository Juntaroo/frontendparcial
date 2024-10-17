import type { Card } from "./CardModel";


export interface CardState {
    loading: boolean,
    data: Card[]
}