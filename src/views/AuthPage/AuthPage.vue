<template>
    <main>
        <div class="criar-login">
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <RouterLink to="/"><span class="button-text">Voltar</span></RouterLink>
            </button>
            <div class="content">
                <h1 class="form-title">Junte-se a nós!</h1>
                <p class="form-description">
                    A GymMart está comprometida em ajudar você a
                    alcançar seus <span class="highlight-span">objetivos de fitness</span> e viver uma <span
                        class="highlight-span">vida mais saudável e ativa</span>. Junte-se a nós em nossa <span
                        class="highlight-span">jornada em busca
                        da excelência em fitness!</span>
                </p>
                <div class="main-card-buttons">
                    <div class="toggle-button" @click="mostrarFormularioCriarConta = true">
                        <a href="#signup-form">
                            <ActionButton ButtonLink="/" ButtonText="Criar conta" />
                        </a>
                    </div>
                    <div class="toggle-button" @click="mostrarFormularioCriarConta = false">
                        <a href="#login-form">
                            <ActionButton ButtonLink="/" ButtonText="Fazer login" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="social-message">
                <div class="line"></div>
                <span class="message">Faça login com contas sociais</span>
                <div class="line"></div>
            </div>
            <div class="social-icons">
                <SvgIcon arialLabel="Log in with Google" xmlnsLink="http://www.w3.org/2000/svg" viewBoxValue="0 0 32 32"
                    pathLink="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                <SvgIcon arialLabel="Log in with Twitter" xmlnsLink="http://www.w3.org/2000/svg" viewBoxValue="0 0 32 32"
                    pathLink="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
                <SvgIcon arialLabel="Log in with GitHub" xmlnsLink="http://www.w3.org/2000/svg" viewBoxValue="0 0 32 32"
                    pathLink="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </div>
        </div>
        <form id="signup-form" v-if="mostrarFormularioCriarConta" @submit="submitForm">
            <AccountForm formTitle="Desbloqueie o Potencial Fitness: Crie Sua Conta na Gym Mart!">
                <template #form-inputs>
                    <InputField inputType="text" inputPlaceholder="Digite seu nome aqui" :requiredOption="true"
                        :maximumNumberOfCharacters="50">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                        </template>
                    </InputField>
                    <InputField inputType="text" inputPlaceholder="Digite seu sobrenome aqui" :requiredOption="true"
                        :maximumNumberOfCharacters="50">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                        </template>
                    </InputField>
                    <InputField inputType="email" inputPlaceholder="Seu email" :requiredOption="true"
                        :maximumNumberOfCharacters="320">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                        </template>
                    </InputField>
                    <InputField :inputType="passwordInputType" inputPlaceholder="Sua senha (mínimo de 8 caracteres)"
                        :requiredOption="true" :maximum-number-of-characters="8">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
                        </template>
                        <template #secondIcon>
                            <i @click="togglePasswordVisibility">
                                <font-awesome-icon :icon="['fas', isPasswordHidden ? 'eye-slash' : 'eye']"
                                    class="password-display-icon" ref="password" />
                            </i>
                        </template>
                    </InputField>
                    <InputField :inputType="passwordInputType" inputPlaceholder="Confirme sua senha" :requiredOption="true"
                        :maximum-number-of-characters="8">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
                        </template>
                    </InputField>
                </template>
                <template #form-buttons>
                    <ActionButton ButtonLink="/" ButtonText="Cadastrar" type="submit" />
                </template>
            </AccountForm>
        </form>

        <form class="login-form" v-else @submit="submitForm">
            <AccountForm formTitle="De Volta à Gym Mart! Saudades de Você! :)">
                <template #form-inputs>
                    <InputField inputType="email" inputPlaceholder="Seu email" :requiredOption="true"
                        :maximumNumberOfCharacters="320">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </template>
                    </InputField>
                    <InputField :inputType="passwordInputType" inputPlaceholder="Sua senha" :requiredOption="true"
                        :maximumNumberOfCharacters="8">
                        <template #firstIcon>
                            <font-awesome-icon :icon="['fas', 'lock']" />
                        </template>
                        <template #secondIcon>
                            <i @click="togglePasswordVisibility">
                                <font-awesome-icon :icon="['fas', isPasswordHidden ? 'eye-slash' : 'eye']"
                                    class="password-display-icon" ref="confirm-password" />
                            </i>
                        </template>
                    </InputField>
                </template>
                <template #form-buttons>
                    <span id="password-reset-button"><router-link to="/redefine-password-page">Esqueceu sua senha?</router-link></span> <br>
                    <ActionButton ButtonLink="/" ButtonText="Entrar" type="submit" />
                </template>
            </AccountForm>
        </form>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import AccountForm from "./AccountForm/AccountForm.vue";
import InputField from '@/components/InputField/InputField.vue';
import ActionButton from '@/components/ProductCard/ActionButton/ActionButton.vue';
import SvgIcon from './SvgIcon/SvgIcon.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash);

export default defineComponent({
    name: "AuthPage",
    components: {
        AccountForm,
        InputField,
        ActionButton,
        FontAwesomeIcon,
        SvgIcon
    },
    data() {
        return {
            mostrarFormularioCriarConta: false,
        };
    },
    setup() {
        const passwordInputType = ref('password');
        const isPasswordHidden = ref(true);

        const togglePasswordVisibility = () => {
            passwordInputType.value = isPasswordHidden.value ? 'text' : 'password';
            isPasswordHidden.value = !isPasswordHidden.value;
        }

        const inputValue = ref("");

        const submitForm = () => {
            window.alert("Logado com sucesso!");
        }

        return {
            passwordInputType,
            isPasswordHidden,
            togglePasswordVisibility,
            inputValue,
            submitForm
        };
    }
})
</script>

<style scoped lang="css" src="./styles.css"></style>