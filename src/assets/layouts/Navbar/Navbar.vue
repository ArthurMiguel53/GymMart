<template>
    <nav>
        <div id="logo">
            <BrandLogo />
        </div>
        <div class="categories">
            <div v-for="atalho in atalhos.shortcuts" :key="atalho.id">
                <Shortcuts :atalho="atalho" />
            </div>
        </div>
        <div class="icons">
            <font-awesome-icon :icon="['fas', 'user']" id="login-icon" title="login/sign-up" />
            <font-awesome-icon :icon="['fas', 'cart-arrow-down']" id="cart-icon" title="carrinho" />
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" id="lupa-icon" title="pesquisar" />
        </div>
        <MenuHamburger />
        <div>
            <form action="#" method="post"></form>
        </div>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import json from "../../json/NavbarShortcuts.json";
import BrandLogo from "@/components/BrandLogo/BrandLogo.vue";
import Shortcuts from "./Shortcuts/Shortcuts.vue";
import MenuHamburger from "./MenuHamburger/MenuHamburger.vue";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faSearch, faCartArrowDown);

export default defineComponent({
    name: "Navbar",
    components: {
        BrandLogo,
        Shortcuts,
        FontAwesomeIcon,
        MenuHamburger
    },
    data() {
        return {
            atalhos: json
        };
    }
});
</script>
  
<style scoped lang="css" src="./styles.css"></style>