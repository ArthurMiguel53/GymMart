<template>
  <div class="made-with-love-message-container">
    <span>Feito com <font-awesome-icon :icon="['fas', 'heart']" id="heart-icon" /> por <span>{{ contributorName
    }}</span></span>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart);

export default defineComponent({
  name: "MadeWithLoveMessage",
  components: {
    FontAwesomeIcon
  },
  props: {
    contributorName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="css" src="./styles.css"></style>