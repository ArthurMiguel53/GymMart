<template>
    <section class="top-banner-container">
        <div class="banner-information">
            <img :src="productImage" :alt="productAlt" id="product-image" />
            <div class="product-details">
                <h1>{{ productTitle }}</h1>
                <p>{{ productDescription }}</p>
                <span id="product-price">{{ productPrice }}</span>
                <ActionButton :ButtonLink="actionButtonLink" :ButtonText="actionButtonTitle" />
            </div>
        </div>
        <div :style="{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(' + backgroundImage1440px + ')' }"
            id="background-image-pc-1440px"></div>
        <div :style="{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(' + backgroundImage1024px + ')' }"
            id="background-image-pc-1024px"></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActionButton from '../ProductCard/ActionButton/ActionButton.vue';
import { gsap } from 'gsap/gsap-core';

export default defineComponent({
    name: "TopBanner",
    components: {
        ActionButton
    },
    props: {
        productImage: {
            type: String,
            required: true
        },
        productAlt: {
            type: String,
            required: true
        },
        productTitle: {
            type: String,
            required: true
        },
        productDescription: {
            type: String,
            required: true
        },
        productPrice: {
            type: String,
            required: true
        },
        actionButtonLink: {
            type: String,
            required: true
        },
        actionButtonTitle: {
            type: String,
            required: true
        },
        backgroundImage1440px: {
            type: String,
            required: true
        },
        backgroundImage1024px: {
            type: String,
            required: true
        }
    },
    mounted() {
        const BACKGROUND_IMAGE_1440px: HTMLDivElement | null = document.querySelector('#background-image-pc-1440px');

        if (BACKGROUND_IMAGE_1440px) {
            gsap.to(BACKGROUND_IMAGE_1440px, {
                x: 10,
                duration: 1,
                ease: "sine.easeIn"
            });
        }

        const BACKGROUND_IMAGE_1024px: HTMLDivElement | null = document.querySelector('#background-image-pc-1024px');

        if (BACKGROUND_IMAGE_1024px) {
            gsap.to(BACKGROUND_IMAGE_1024px, {
                x: 10,
                duration: 1,
                ease: "sine.easeIn"
            });
        }

        const PRODUCT_IMAGE: HTMLElement | null = document.querySelector('#product-image');

        if (PRODUCT_IMAGE) {
            gsap.to(PRODUCT_IMAGE, {
                y: 10, 
                duration: 1.5,
                ease: "sine.easeIn",
                repeat: -1,
                yoyo: true
            })
        }
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>