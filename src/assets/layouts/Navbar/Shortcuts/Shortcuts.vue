<template>
    <div>
        <ul>
            <li @click="toggleDropdown" v-if="hasDropdown" class="dropdown-toggle">
                {{ atalho.name }}
                <font-awesome-icon id="dropdown-icon" :icon="dropdownStatusIcon" />
                <div :class="isDropdownOpen ? 'dropdown-open' : 'dropdown-closed'">
            <li v-for="item in atalho.dropdown" :key="item.id" class="dropdown-item">
                <router-link :to="item.link">{{ item.name }}</router-link>
            </li>
    </div>
    </li>
    <li v-else>
        <router-link :to="atalho.link" class="regular-link">{{ atalho.name }}</router-link>
    </li>
    </ul>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: "Shortcuts",
    components: {
        FontAwesomeIcon
    },
    props: {
        atalho: {
            type: Object,
            required: true
        }
    },
    data(): { isDropdownOpen: boolean; dropdownStatusIcon: any } {
        return {
            isDropdownOpen: false,
            dropdownStatusIcon: faChevronDown,
        };
    },
    computed: {
        hasDropdown(): boolean {
            return this.atalho.dropdown;
        }
    },
    methods: {
        toggleDropdown(): void {
            if (this.hasDropdown) {
                this.isDropdownOpen = !this.isDropdownOpen;
                this.dropdownStatusIcon = this.isDropdownOpen ? faChevronUp : faChevronDown;
            }
        }
    }
})
</script>
  
<style scoped lang="css" src="./styles.css"></style>  