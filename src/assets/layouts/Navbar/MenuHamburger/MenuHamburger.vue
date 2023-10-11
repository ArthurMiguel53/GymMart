<template>
    <div class="menu-hamburger-container" @click="toggleTopics()">
        <div id="hamburguer">
            <div id="top-line"></div>
            <div id="middle-line"></div>
            <div id="bottom-line"></div>
        </div>
    </div>
    <div class="topics" v-show="showTopics">
            <ul id="topics-list">
                <li v-for="topic in topics" :key="topic" class="topic">{{ topic }}</li>
            </ul>
    </div>
</template>  

<script lang="ts">
import { defineComponent } from 'vue';
import Shortcuts from "../Shortcuts/Shortcuts.vue"

export default defineComponent({
    name: "MenuHamburger",
    components: Shortcuts,

    data() {
        return{
            showTopics: false,
            topic: String,
            topics: [
                "Home",
                "Sobre nós",
                "Central de Ajuda",
                "Categorias"
            ],

        }
    },
    methods: {
        toggleTopics() {
            this.showTopics = !this.showTopics
            console.log(this.showTopics)
        }
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>
<style scoped>

    #hamburguer{
        padding: 5px;
        border: solid grey 1px;
        border-radius: 1px;
    }

    #hamburguer:hover{
        padding: 5px;
        border: solid grey 1px;
        border-radius: 1px;
        background-color: rgba(90, 86, 86, 0.488);
        cursor: pointer
    }
    .topics{
        width: 40vh;
        height: auto;
        border: solid grey 0.2px;
        border-radius: 6px;
        padding: 10px;
        position: absolute;
        top:100%;
        left: 60%;
    }

    #topics-list{
        margin-left: 10%;
    }

    .topic:hover{
        color: grey;
        cursor: pointer;
    }
</style>