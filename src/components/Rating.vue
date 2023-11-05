<script>
export default{
    props: ['initialRating'],
    data(){
        return{
            rating: this.initialRating,
            color: "blue"
        }
    },
    methods:{
        assignRating(rating){
            this.rating = rating
        }
    }
}
</script>
<template>
    <h1>Rating: {{ rating }}</h1>
    <span :style="{color: color}" v-on:click="assignRating(1)">
        <i v-if="rating >=1" class="bi bi-star-fill"></i>
        <i v-else class="bi bi-star"></i>
    </span>
    <span :style="{color: color}" v-on:click="assignRating(2)">
        <i v-if="rating >=2" class="bi bi-star-fill"></i>
        <i v-else class="bi bi-star"></i>
    </span>
    <span :style="{color: color}" v-on:click="assignRating(3)">
        <i v-if="rating >=3" class="bi bi-star-fill"></i>
    <i v-else class="bi bi-star"></i>
    </span>
    <span :style="{color: color}" v-on:click="assignRating(4)">
        <i v-if="rating >=4" class="bi bi-star-fill"></i>
        <i v-else class="bi bi-star"></i>
    </span>
    <span :style="{color: color}" v-on:click="assignRating(5)">
        <i v-if="rating >=5" class="bi bi-star-fill"></i>
        <i v-else class="bi bi-star"></i>
    </span>
</template>