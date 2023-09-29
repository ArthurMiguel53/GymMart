<template>
    <div class="brand-logo-container">
        <span>G</span>
        <span>Y</span>
        <span>M</span>
        <font-awesome-icon :icon="['fas', 'dumbbell']" id="brand-logo-icon" />
        <span class="highlighted-letter">M</span>
        <span class="highlighted-letter">A</span>
        <span class="highlighted-letter">R</span>
        <span class="highlighted-letter">T</span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
library.add(faDumbbell);

import { gsap } from 'gsap';

export default defineComponent({
    name: 'BrandLogo',
    components: {
        FontAwesomeIcon,
    },
    mounted() {
        const BRAND_LOGO_ICON: HTMLElement | null = document.getElementById("brand-logo-icon");
        const HIGHLIGHTED_LETTER: NodeListOf<HTMLElement> = document.querySelectorAll(".highlighted-letter");

        if (BRAND_LOGO_ICON) {
            setTimeout(() => {
                gsap.to(HIGHLIGHTED_LETTER, {
                    left: 'auto',
                    duration: 1.5,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(BRAND_LOGO_ICON, {
                            opacity: 1,
                            duration: 1,
                            ease: "bounce.out",
                            top: "auto"
                        });
                    }
                })
            }, 1000);
        }
    }
});
</script>
  
<style scoped lang="css" src="./style.css"></style>
  