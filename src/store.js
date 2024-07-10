import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    archetypeList: [],
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0", // api carte yu-gi-oh
    archetypeURL : "https://db.ygoprodeck.com/api/v7/archetypes.php",
    apiArchetypeParam: "archetype",
    searchCard: "",
    /* apiURL:"https://api.pokemontcg.io/v2/cards?q=set.id:sv6&pageSize=167" //api carte pokemon */
})