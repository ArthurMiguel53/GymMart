<template>
    <div class="product-card-container">
        <img :src="ProductImage" :alt="ProductImageAlt" />
        <div class="product-details">
            <span id="product-name">{{ ProductName }}</span>
            <span id="base-price">{{ ProductPrice }}</span>
            <span id="discounted-price" class="discount" v-if="DiscountedPrice">
                {{ DiscountedPrice }}
            </span>
            <span id="regular-price" class="no-discount" v-else>
                R$ 00,00
            </span>
        </div>
        <div class="product-description-and-button">
            <span id="product-description">{{ ProductDescription }}</span>
            <ActionButton :ButtonLink="ButtonLink" :ButtonText="ButtonText" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ActionButton from "./ActionButton/ActionButton.vue";

export default defineComponent({
    name: "ProductCard",
    components: {
        ActionButton
    },
    props: {
        ProductImage: {
            type: String,
            required: true
        },
        ProductName: {
            type: String,
            required: true
        },
        ProductImageAlt: {
            type: String,
            required: true
        },
        ProductPrice: {
            type: String,
            required: true,
            default: 0
        },
        DiscountedPrice: {
            type: String,
            required: false
        },
        ProductDescription: {
            type: String,
            required: true
        },
        ButtonLink: {
            type: String,
            required: true
        },
        ButtonText: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>
