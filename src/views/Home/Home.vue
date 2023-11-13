<template>
    <Navbar />
    <main>
        <section>
            <Carousel :products="product.products" />
        </section>
        <ProductsScrool/>
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from "@/assets/layouts/Navbar/Navbar.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import card from "@/components/ProductCard/ProductCard.vue"
import Footer from "@/assets/layouts/Footer/Footer.vue";

import json from "@/assets/json/CarouselBannerProducts.json";
import ProductsScrool from '@/components/productsScrool/productsScrool.vue';

export default defineComponent({
    name: "Home",
    components: {
        Navbar,
        Carousel,
        Footer,
        card,
        ProductsScrool
    },
    data() {
        return {
            product: json
        }
    },
})
</script>