<template>
    <div>
        <ul>
            <li><router-link :to="ShortcutLink"></router-link>{{ ShortcutName }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Shortcuts",
    props: {
        ShortcutLink: {
            type: String,
            required: true
        },
        ShortcutName: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>