<template>
    <div class="horizontal-link-list-container">
        <ul v-for="(listItem, index) in shortcutInformationList">
            <li v-if="useRouterLink"><router-link :to="listItem.shortcutLink">{{ listItem.shortcutName
            }}</router-link></li>
            <li v-else><a :href="listItem.shortcutLink">{{ listItem.shortcutName }}</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { listInformations } from '@/types/FooterInterfaces/HorizontalLinkListInterface'

export default defineComponent({
    name: "HorizontalLinkList",
    props: {
        useRouterLink: Boolean,
        shortcutInformationList: {
            type: Array as () => listInformations[]
        },
    }
})
</script>

<styles scoped lang="css" src="./styles.css"></styles>