import type { CardState } from "@/models/CardState";
import { defineStore } from "pinia";
import type { Book } from "@/models/BookModel";

export const useCardStore = defineStore({
    id: 'auth',
    state: () : CardState=> ({
        loading: false,
        data: [],
    }),
    actions: {
        addCarrito(data: Book):  void {
            this.data.push(data);
        },
        removeCarrito(data: Book): void {
            this.data = this.data.filter((item) => item.id !== data.id);
        },
    }
})