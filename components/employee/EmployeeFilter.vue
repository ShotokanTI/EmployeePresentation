<script setup lang="ts">
import type { Props } from '~/mocks/employee/interfaces/employee.list.props.interface';

const { employees } = defineProps<Props>()
const emit = defineEmits<{ (e: 'onFilterApply', search: string): void }>()

function emitFilteredEmployee(event: Event): void {
    const target = event.target as HTMLInputElement;
    emit('onFilterApply', target.value);
}

</script>

<template>
    <div class="employee__filter pt-4">
        <v-text-field label="Search" class="mx-4" @input="emitFilteredEmployee($event)"></v-text-field>
    </div>
</template>