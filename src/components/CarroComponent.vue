<script setup lang="ts">
import { useBookStore } from '@/stores/BookStore';
import type { Book } from '@/models/BookModel'

const bookStore = useBookStore();
const books: Book[] = bookStore.getAllBooks();
</script>

<template>
    <div class="wrapper">
        <div
            class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2">
            <div v-for="book in books" :key="book.id" class="item-wrapper">
                <div class="img-cover">
                    <img :src="book.coverImg" v-bind:alt="book.title">
                </div>
                <div class="book-title">{{ book.title }}</div>
                <div class="book-author">{{ book.author }}</div>
                <Rating class="star" v-model="book.rating" :stars="5" />
                <div class="price">$ {{ book.price }}.00</div>
                <div class="overlay">
                    <!-- Aca se eliminará el carrito -->
                    <button class="btn-buy">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>