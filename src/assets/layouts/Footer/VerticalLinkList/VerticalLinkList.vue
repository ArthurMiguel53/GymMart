<template>
    <ul class="vertical-link-list-container">
        <li v-for="(listItem, index) in shortcutInformationList" :key="index">
            <router-link v-if="useRouterLink" :to="listItem.listItemUrl">{{ listItem.listItemText }}</router-link>
            <a v-else :href="listItem.listItemUrl">{{ listItem.listItemText }}</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { listInformations } from '@/types/FooterInterfaces/VerticalLinkListInterface';

export default defineComponent({
    name: "VerticalLinkList",
    props: {
        useRouterLink: Boolean,
        shortcutInformationList: {
            type: Array as () => listInformations[],
            required: true,
        }
    }
})
</script>

<styles scoped lang="css" src="./styles.css"></styles>