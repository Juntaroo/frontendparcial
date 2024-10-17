import type { Book } from "./BookModel";


export interface CardState {
    loading: boolean,
    data: Book[]
}