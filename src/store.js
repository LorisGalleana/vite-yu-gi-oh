import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0", // api carte yu-gi-oh
    /* apiURL:"https://api.pokemontcg.io/v2/cards?q=set.id:sv6&pageSize=167" //api carte pokemon */
})