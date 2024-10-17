import type { CardState } from "@/models/CardState";
import { defineStore } from "pinia";
import type { Card } from "@/models/CardModel";

export const useCardStore = defineStore({
    id: 'auth',
    state: () : CardState=> ({
        loading: false,
        data: [],
    }),
    actions: {
        addCarrito(data: Card):  void {
            this.data.push(data);
        },
        removeCarrito(data: Card): void {
            this.data = this.data.filter((item) => item.id !== data.id);
        },
        getAllCards(): Card[] {
            return this.data
        },
    }
})