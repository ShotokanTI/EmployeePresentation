<script setup>
import HeaderApp from "../components/layout/HeaderApp.vue"
import FooterApp from "../components/layout/FooterApp.vue"
</script>

<template>
    <div class="layout__default">
        <v-app>
            <v-layout>
                <HeaderApp></HeaderApp>
                <slot />
                <FooterApp></FooterApp>
            </v-layout>
        </v-app>
    </div>
</template>