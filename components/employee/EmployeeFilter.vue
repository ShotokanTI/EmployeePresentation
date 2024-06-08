<script setup lang="ts">
import { debounce } from '~/utils/employee/utils.employee';

const WAIT_INACTIVITY_TYPING = 1000;
const search: Ref<string> = ref("");
const emit = defineEmits<{ (e: 'onFilterApply', search: string): void }>()

function emitFilteredEmployee(): void {
    emit('onFilterApply', search.value);
}

const debouncedEmitFilteredEmployee = debounce(emitFilteredEmployee, WAIT_INACTIVITY_TYPING);

watch(search, () => {
    debouncedEmitFilteredEmployee()
})

</script>

<template>
    <div class="employee__filter w-100">
        <v-text-field v-model="search" clearable class="mx-4 text-black mt-5" color="secondary"
            hint="Ex: Desenvolvedor full-stack" placeholder="" tile>
            <template v-slot:default>
                <Icon name="uil:search"></Icon>
            </template>
        </v-text-field>
    </div>
</template>
