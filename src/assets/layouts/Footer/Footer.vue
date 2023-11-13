<template>
    <footer>
        <div class="main-shortcuts-container">
            <div class="newsletter-container">
                <Newsletter
                    newsletterBackgroundImage="/img/NewsletterBanner/portrait-muscled-woman-training-with-barbell-isolated-purple-background-neon-light.jpg"
                    newsletterTitle="Dicas de Fitness Exclusivas"
                    newsletterDescription="Revelamos estratégias avançadas de treinamento, planos de exercícios personalizados e conselhos nutricionais especializados gratuitamente!"
                    inputPlaceholder="Digite seu email aqui" :requiredOption="true" :maximumNumberOfCharacters="320"
                    buttonLink="/" buttonText="enviar" />
            </div>
            <section class="footer-section">
                <div class="atalho">
                    <div class="logo-container">
                        <BrandLogo />
                        <p>Sua jornada de fitness começa <span class="highlight-span">aqui.</span></p>
                    </div>
                    <h1>ENCONTRE-NOS EM</h1>
                    <VerticalLinkList :shortcutInformationList="contactList" />
                </div>

                <div class="atalho">
                    <h1>Categorias</h1>
                    <VerticalLinkList :shortcutInformationList="categoryList" />
                </div>

                <div class="atalho">
                    <h1>Sobre a Gym Mart</h1>
                    <VerticalLinkList :shortcutInformationList="aboutUsList" />
                </div>

                <div class="atalho">
                    <h1>Recursos de compra</h1>
                    <VerticalLinkList :shortcutInformationList="purchaseResourcesList" />
                </div>
            </section>
        </div>

        <section class="useful-shortcuts-section">
            <HorizontalLinkList @click="handleShortcutClick" :shortcutInformationList="usefulShortcutsList" />
        </section>

        <section class="copyright-section">
            <span>© 2023 GymMart. All rights reserved.</span>
            <MadeWithLoveMessage :contributorName="currentContributor.contributorName" />
        </section>

    </footer>
</template>
  

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faSquareInstagram);

import Newsletter from './Newsletter/Newsletter.vue';
import VerticalLinkList from './VerticalLinkList/VerticalLinkList.vue';
import BrandLogo from '@/components/BrandLogo/BrandLogo.vue';
import HorizontalLinkList from './HorizontalLinkList/HorizontalLinkList.vue';
import MadeWithLoveMessage from './MadeWithLoveMessage/MadeWithLoveMessage.vue';

import ContactLinksList from '../../json/Footer/ContactLinksList.json';
import CategoryLinksList from '../../json/Footer/CategoryLinksList.json';
import AboutUsLinksList from '../../json/Footer/AboutUsLinksList.json';
import PurchaseResourcesLinksList from '../../json/Footer/PurchaseResourcesLinksList.json';
import HelpfulFooterLinks from '../../json/Footer/HelpfulFooterLinks.json';
import ContributorsList from '../../json/Footer/ContributorsList.json';

import { listInformations } from "@/types/FooterInterfaces/HorizontalLinkListInterface";

export default defineComponent({
    name: "Footer",
    components: {
        Newsletter,
        BrandLogo,
        FontAwesomeIcon,
        VerticalLinkList,
        HorizontalLinkList,
        MadeWithLoveMessage
    },
    data() {
        return {
            contactList: ContactLinksList.contactArray,
            categoryList: CategoryLinksList.categoryArray,
            aboutUsList: AboutUsLinksList.aboutUsArray,
            purchaseResourcesList: PurchaseResourcesLinksList.purchaseResourcesArray,
            usefulShortcutsList: HelpfulFooterLinks.helpfulFooterLinks,
        };
    },
    setup() {
        const currentContributorIndex = ref(0);
        const contributorsList = ContributorsList;

        const currentContributor = ref(contributorsList[currentContributorIndex.value]);

        const rotateContributor = () => {
            currentContributorIndex.value = (currentContributorIndex.value + 1) % contributorsList.length;
            currentContributor.value = contributorsList[currentContributorIndex.value];
        };

        setInterval(rotateContributor, 3000);

        const handleShortcutClick = (shortcut: listInformations) => {
            if (shortcut.shortcutName === "Avaliar") {
                console.log("Eita, bixo kkkk")
            }
        };

        return {
            currentContributor,
            handleShortcutClick
        };
    },
});
</script>

<style scoped lang="css" src="./styles.css"></style>