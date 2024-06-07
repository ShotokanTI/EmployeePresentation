<script setup>
const ICONS_NAMES = ["uil:github", "uil:linkedin", "uil:youtube"]

</script>

<template>
    <div class="layout__footer">
        <v-footer name="footer" app color="primary" class="d-flex flex-column pa-0">
            <div class="d-flex flex-column align-center w-100">
                <div class="d-flex ga-3 ma-3">
                    <div v-for="name in ICONS_NAMES" :key="name">
                        <div class="icon position-relative">
                            <Icon class="cursor-pointer icon__item" :name="name" size="30" />
                            <v-divider class="icon__divider position-absolute w-100 mt-1" :thickness="2"></v-divider>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 bg-secondary justify-center">
                <span class="text-white ma-2">
                    Desenvolvido por <span class="font-weight-bold">Matheus Barbosa do Nascimento</span>
                </span>
            </div>
        </v-footer>
    </div>
</template>

<style scoped lang="scss">
.icon {
    &:hover .icon__divider {
        display: block;
    }
}

.icon__item {
    &:hover {
        color: $secondary-color
    }
}

.icon__divider {
    display: none;
}
</style>