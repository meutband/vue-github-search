<script>
import Product from './Product.vue'

export default{
    components:{
        Product
    },
    data(){
        return{
            products:[
                {
                    id: "1",
                    imageUrl: "http://loremflickr.com/150/150?random=1",
                    productName: "Product 1",
                    releasedDate: "May 31, 2016",
                    description: "Lorem ipsum dolor sit amet, consectetur..",
                    rating: 4
                },
                {
                    id: "1",
                    imageUrl: "http://loremflickr.com/150/150?random=2",
                    productName: "Product 2",
                    releasedDate: "June 30, 2016",
                    description: "Lorem ipsum dolor sit amet, consectetur..",
                    rating: 2
                },
                {
                    id: "1",
                    imageUrl: "http://loremflickr.com/150/150?random=3",
                    productName: "Product 3",
                    releasedDate: "July 31, 2016",
                    description: "Lorem ipsum dolor sit amet, consectetur..",
                    rating: 5
                },
            ]
        }
    }
}
</script>
<template>
    <div v-for="product in products" :key="product.id">
        <Product :data="product" />
    </div>
</template>