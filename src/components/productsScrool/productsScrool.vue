<template>
  <div class="boxcards">
    <div class="cards cardsAnimation" v-for="product in products" :key="product.id" @mouseenter="AnimationPausedYes()" @mouseleave="AnimationPausedNo">
      <card
      :ProductImage="product.image"
      :ProductName="product.name"
      :ProductImageAlt = "product.alt"
      :ProductPrice = "product.price"
      :DiscountedPrice = "product.discountedPrice"
      :ProductDescription = "product.description"
      :ButtonLink = "product.buttonLink"
      :ButtonText = "product.buttonText"    
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import card from "../ProductCard/ProductCard.vue"
import jsonProducts from "./products data/products.json"
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  name: "ProductsScrool",
  components: {
    card
  },
  data() {
  return {
    products: jsonProducts.products,
    AnimationPaused: true
  }},
  methods:{
    AnimationPausedYes() {
      const cards = document.querySelectorAll('.cardsAnimation') as NodeListOf<HTMLElement>
      cards.forEach((card) => {
    card.style.animationPlayState = "paused";
  });
    },

    AnimationPausedNo() {
      const cards = document.querySelectorAll('.cardsAnimation') as NodeListOf<HTMLElement>
      cards.forEach((card) => {
    card.style.animationPlayState = "running";
  });
    }
  }
});
</script>

<style scoped>
.boxcards{
  width: 100%;
  height: auto;
  display: flex;
  background: #000;
  margin-right: 10px;
  overflow: hidden;
  object-fit: scale-down;
  margin: auto;
}

.cards{
  margin-right: 50px;
}

@keyframes movecards{
  0%{
    transform: translateX(50px)
  }
  50%{
    transform: translateX(-2000px);
  }
  100%{
    transform: translateX(50px);
  }
}

.cardsAnimation{
  animation: movecards 60s linear infinite;
}
</style>