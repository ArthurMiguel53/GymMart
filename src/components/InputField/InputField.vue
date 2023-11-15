<template>
    <div class="input-container">
        <div class="input-wrapper">
            <div class="icon-left">
                <span id="first-icon">
                    <slot name="firstIcon"></slot>
                </span>
            </div>
            <input :type="inputType" :placeholder="inputPlaceholder" :required="requiredOption"
                :maxlength="maximumNumberOfCharacters" @input="emitValue" />
            <div class="icon-right">
                <span id="second-icon">
                    <slot name="secondIcon"></slot>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InputField",
    props: {
        inputType: {
            type: String,
            required: true,
        },
        inputPlaceholder: {
            type: String,
            required: true,
        },
        requiredOption: {
            type: Boolean,
            required: false,
            default: true,
        },
        maximumNumberOfCharacters: {
            type: Number,
            required: true,
        },
    },
    methods: {
        emitValue(event: Event) {
            if (event.target instanceof HTMLInputElement) {
                this.$emit('input', (event.target as HTMLInputElement).value);
            }
        }
    }
});
</script>

<style scoped lang="css" src="./styles.css"></style>