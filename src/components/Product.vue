<script>
import Rating from "./Rating.vue"

export default{
    props: {
        data: Object
    },
    components:{
        Rating
    }
}
</script>
<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="data.imageUrl" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ data.productName }}</h5>
                    <Rating :initialRating="data.rating" />
                    <p class="card-text">{{ data.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ data.releasedDate }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>