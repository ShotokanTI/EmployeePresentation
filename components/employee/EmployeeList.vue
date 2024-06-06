<script setup lang="ts">
import type { Employee } from '~/mocks/employee/interfaces/employee.interface';
import type { Props } from '~/mocks/employee/interfaces/employee.list.props.interface';

let { employees } = defineProps<Props>()
const filteredEmployees = ref<Employee[]>(employees);
const search = ref("");

function handleFilter(newFilteredEmployees: string): void {
    search.value = newFilteredEmployees;
}

</script>

<template>
    <!-- Tabela de Funcionários -->
    <v-container>
        <v-data-table hide-default-footer height="400" width="620" :items="filteredEmployees" :search="search" class="elevation-3">
            <template v-slot:top>
                <EmployeeFilter :employees="employees" @onFilterApply="handleFilter" />
            </template>
            <template v-slot:item.photo="{ item }">
                <v-hover>
                    <template  v-slot:default="{ isHovering,props }">
                        <v-img v-bind="props" :height="isHovering ? 62 : 60" :width="isHovering ? 62 : 60" class="ma-4 cursor-pointer teste" :src="item.photo" rounded="circle"></v-img>
                    </template>
                </v-hover>
            </template>
        </v-data-table>
    </v-container>
</template>

<style>
.v-data-table__tr:hover{
    background-color: #EFEFEF;
    cursor:pointer
}
.teste{
    transition: all 250ms ease-in;
}
</style>