<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Props } from '~/mocks/employee/interfaces/employee.list.props.interface';
import { next, previous } from '~/utils/employee/utils.employee';

const { employees } = defineProps<Props>()
const route = useRoute();

let idEmployee: Ref<number> = ref(parseInt(route.params.id as unknown as string));
const arrowVisibilityLeft: Ref<boolean> = ref(true)
const arrowVisibilityRigth: Ref<boolean> = ref(true)
const transitionDirection = ref<'left' | 'right'>();

function applyPrevious() {
    transitionDirection.value = 'left';
    idEmployee.value = previous(idEmployee.value)
}
function applyNext() {
    transitionDirection.value = 'right';
    idEmployee.value = next(idEmployee.value, employees)
}

const employeesX = computed(() => {
    return employees.find(employee => idEmployee.value === employee.id)
})

</script>

<template>
    <v-card class="d-flex justify-center align-center" elevation="3">
        <div class="d-flex flex-column align-center justify-center w-100 ma-10">
            <div class="d-flex align-center ga-10">
                <Icon :class="{ 'invisible': !arrowVisibilityLeft }" @click="applyPrevious" class="cursor-pointer bg-primary"
                    name="uil:arrow-left" color="primary" size="30" />
                <transition :name="transitionDirection" mode="out-in">
                    <v-img class="border-lg border-secondary" v-if="employeesX" :key="employeesX.photo" width="130" rounded="circle" :src="employeesX?.photo"></v-img>
                </transition>
                <Icon :class="{ 'invisible': !arrowVisibilityRigth }" @click="applyNext" class="cursor-pointer bg-primary"
                    name="uil:arrow-right" color="primary" size="30" />
            </div>
            <div class="text-center">
                <transition :name="transitionDirection" mode="out-in">
                    <div v-if="employeesX" :key="employeesX.id">
                        <v-card-title>{{ employeesX?.name }}</v-card-title>
                        <v-card-subtitle>{{ employeesX?.position }}</v-card-subtitle>
                        <v-card-text>{{ employeesX?.description }}</v-card-text>
                    </div>
                </transition>
            </div>
        </div>
    </v-card>
</template>




<style>
.v-card-title {
    font-weight: bold;
    font-size: 1.5rem;
}

.v-card-subtitle {
    font-size: 1.2rem;
    color: grey;
}

.invisible {
    visibility: hidden;
}

.left-enter-active, .left-leave-active,
.right-enter-active, .right-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.left-enter-from, .left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.left-leave-from, .left-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.right-enter-from, .right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.right-leave-from, .right-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>

