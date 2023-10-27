<template>
    <div class="carousel-controls-container">
        <div v-for="(product, index) in productDetails" :key="product.id" @click="clickedControlProductIndex(index)">
            <img :src="product.productImage" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../../types/Carousel/ProductInterface";

export default defineComponent({
    name: "CarouselPanel",
    props: {
        productDetails: {
            type: Array as () => Product[],
            required: true,
        },
        currentProductId: Number,
    },
    methods: {
        clickedControlProductIndex(index: number) {
            this.$emit("clickedControlProductIndex", index);
        },
    },
});
</script>
  
<style scoped lang="css" src="./styles.css"></style>
../../../types/Carousel/ProductInterface