<template>
    <div class="newsletter-form-container"
        :style="{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(' + newsletterBackgroundImage + ')' }"
        ref="newsletterContainer">
        <div class="introduction-container">
            <h1>{{ newsletterTitle }}</h1>
            <p>{{ newsletterDescription }}</p>
            <form @submit="submitForm">
                <div class="signup-container">
                    <InputField inputType="email" :inputPlaceholder="inputPlaceholder" :requiredOption="requiredOption"
                        :maximumNumberOfCharacters="maximumNumberOfCharacters">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                        </template>
                    </InputField>
                    <ActionButton :ButtonLink="buttonLink" :ButtonText="buttonText" type="submit" />
                </div>
            </form>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

import ActionButton from "@/components/ProductCard/ActionButton/ActionButton.vue"
import InputField from "@/components/InputField/InputField.vue";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);

export default defineComponent({
    name: "Newsletter",
    components: {
        ActionButton,
        InputField,
        FontAwesomeIcon
    },
    props: {
        newsletterBackgroundImage: {
            type: String,
            required: true
        },
        newsletterTitle: {
            type: String,
            required: true
        },
        newsletterDescription: {
            type: String,
            required: true
        },
        inputPlaceholder: {
            type: String,
            required: true
        },
        requiredOption: {
            type: Boolean,
            required: true
        },
        maximumNumberOfCharacters: {
            type: Number,
            required: true
        },
        buttonLink: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
    },
    setup() {
        const inputValue = ref("");

        const submitForm = () => {
            window.alert("Cadastrado com sucesso!");
        }
        return {
            inputValue,
            submitForm,
        };
    },
})
</script>
<style scoped lang="css" src="./styles.css"></style>
  