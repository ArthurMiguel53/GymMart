<template>
    <div class="carousel-container">
        <div v-for="(product, index) in products" :key="product.id">
            <div v-if="index === currentSlideIndex">
                <TopBanner :productImage="product.productImage" :productAlt="product.productAlt"
                    :productTitle="product.productTitle" :productDescription="product.productDescription"
                    :productPrice="product.productPrice" :actionButtonLink="product.actionButtonLink"
                    :actionButtonTitle="product.actionButtonTitle" :backgroundImage1440px="product.backgroundImage1440px"
                    :backgroundImage1024px="product.backgroundImage1024px" />
            </div>
        </div>
        <div class="carousel-controls-container">
            <CarouselPanel :productDetails="products" @clickedControlProductIndex="exchangeBannerInfo" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../types/Carousel/ProductInterface";

import TopBanner from "../TopBanner/TopBanner.vue";
import CarouselPanel from './CarouselPanel/CarouselPanel.vue';

export default defineComponent({
    name: "Carousel",
    components: {
        TopBanner,
        CarouselPanel
    },
    props: {
        products: {
            type: Array as () => Product[],
            required: true,
        },
    },
    data() {
        return {
            currentSlideIndex: 0,
        };
    },
    methods: {
        exchangeBannerInfo(index: number) {
            this.currentSlideIndex = index;
        },
    },
})
</script>

<style scoped lang="css" src="./styles.css"></style>