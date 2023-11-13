<template>
    <div class="container">
        <div class="card" id="card">
            <div class="form" id="login-form">
                <h1 class="form-title">{{ formTitle }}</h1>
                <p>{{ formDescription }}</p>
                <div class="login-container">
                    <div class="input-container">
                        <slot name="form-inputs"></slot>
                    </div>
                    <slot name="form-buttons"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';

import ActionButton from '@/components/ProductCard/ActionButton/ActionButton.vue';

export default defineComponent({
    name: "AccountForm",
    components: {
        ActionButton
    },
    props: {
        formTitle: {
            type: String,
            required: false
        },
        formDescription: {
            type: String,
            required: false
        }
    },
    mounted() {
        const FORM_CONTAINER: HTMLElement | null = document.querySelector(".card");

        if (FORM_CONTAINER) {

            gsap.to(FORM_CONTAINER, {
                opacity: 1,
                top: '10px',
                duration: 1,
                ease: 'power2.inOut',
            })

        }
    }
});
</script>
  
<style scoped lang="css" src="./styles.css"></style>
  