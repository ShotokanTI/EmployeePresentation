<script setup lang="ts">
interface Links {
    name: string;
    url: string;
}
const icons: Ref<Links[]> = ref([
    { name: "uil:github", url: "https://github.com/ShotokanTI/EmployeePresentation" },
    { name: "uil:linkedin", url: "https://www.linkedin.com/in/full-stack-matheus-barbosa/" },
    { name: "uil:youtube", url: "https://www.youtube.com/watch?v=Jxq5C67fqWs" }
]);


</script>

<template>
    <div class="layout__footer">
        <v-footer name="footer" app color="primary" class="d-flex flex-column pa-0">
            <div class="d-flex flex-column align-center w-100">
                <div class="d-flex ga-3 ma-3">
                    <div v-for="item in icons" :key="item.name">
                        <div class="icon position-relative">
                            <a style="color:white" :href="item.url" target="_blank">
                                <Icon class="cursor-pointer icon__item" :name="item.name" size="30" />
                            </a>
                            <v-divider class="icon__divider position-absolute w-100 mt-1" :thickness="2"></v-divider>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 bg-secondary justify-center">
                <span class="text-white ma-2">
                    Developed by <span class="font-weight-bold">Matheus Barbosa do Nascimento</span>
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