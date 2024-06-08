<script setup>
import HeaderApp from "../components/layout/HeaderApp.vue"
import FooterApp from "../components/layout/FooterApp.vue"
import BreadCrumbApp from "../components/layout/BreadCrumbApp.vue"
</script>

<template>
    <div class="layout__default">
        <v-app>
            <v-layout>
                <HeaderApp></HeaderApp>
                <v-main class="d-flex align-center justify-center">
                    <BreadCrumbApp />
                    <slot />
                </v-main>
                <FooterApp></FooterApp>
            </v-layout>
        </v-app>
    </div>
</template>

<style lang="scss" scoped>
.v-main{
    padding:0;
    background:#F5F6FC;
}
</style>