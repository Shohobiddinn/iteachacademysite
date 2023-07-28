import { defineStore } from "pinia";
export const useStore = defineStore('store', () => {
    const loader = ref(true)
    return {
        loader
    }
})