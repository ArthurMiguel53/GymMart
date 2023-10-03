<template>
    <section class="top-banner-container">
        <div class="banner-information">
            <img :src="productImage" :alt="productAlt" />
            <div class="product-details">
                <h1>{{ productTitle }}</h1>
                <p>{{ productDescription }}</p>
                <span id="product-price">{{ productPrice }}</span>
                <ActionButton :ButtonLink="actionButtonLink" :ButtonText="actionButtonTitle" />
            </div>
        </div>
        <div :style="{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(' + backgroundImage1440px + ')'}" id="background-image-pc-1440px"></div>
        <div :style="{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(' + backgroundImage1024px + ')'}" id="background-image-pc-1024px"></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActionButton from '../ProductCard/ActionButton/ActionButton.vue';

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
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>