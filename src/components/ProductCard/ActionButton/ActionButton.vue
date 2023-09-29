<template>
    <div>
        <button>
            <router-link :to="ButtonLink"></router-link>
            <span>{{ ButtonText }}</span>
        </button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ActionButton',
    props: {
        ButtonLink: {
            type: String,
            required: true,
        },
        ButtonText: {
            type: String,
            required: true,
        },
    },
});
</script>
  
<style scoped lang="css" src="./style.css"></style>
  