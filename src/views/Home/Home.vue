<template>
    <Navbar />
    <main>
        <section>
            <Carousel :products="product.products" />
        </section>
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from "@/assets/layouts/Navbar/Navbar.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Footer from "@/assets/layouts/Footer/Footer.vue";

import json from "@/assets/json/CarouselBannerProducts.json";

export default defineComponent({
    name: "Home",
    components: {
        Navbar,
        Carousel,
        Footer
    },
    data() {
        return {
            product: json
        }
    },
})
</script>