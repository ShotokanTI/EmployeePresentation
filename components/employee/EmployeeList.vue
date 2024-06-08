<script setup lang="ts">
import type { Employee } from '~/mocks/employee/interfaces/employee.interface';
import { useWidthTable } from '../../utils/employee/utils.employee.vuetify';


let employees: Ref<Employee[]> = ref([]);
const skeletonLoading: Ref<boolean> = ref(true);
const router = useRouter();
const search = ref("");

onMounted(() => {
    init()
})

function init() {
    emulateHttpService();
}

function emulateHttpService() {
    const emulateCallApi = 1000;
    setTimeout(() => {
        employees.value = useEmployeeList().value
        skeletonLoading.value = false;
    }, emulateCallApi);
}

function handleFilter(newFilteredEmployees: string): void {
    search.value = newFilteredEmployees;
}

function goToDetail(event: MouseEvent, { item }: { item: Employee }): void {
    useSelectedEmployee().value = item.id
    router.push({ path: `employee-details` });
}

</script>

<template>
    <v-container class="my-10 rounded-lg">
        <v-skeleton-loader v-if="skeletonLoading" type="table" width="100%" height="500">
        </v-skeleton-loader>
        <v-data-table v-else :mobile="$vuetify.display.xs" :hide-default-header="$vuetify.display.xs"
            disable-sort fixed-header @click:row="goToDetail" hide-default-footer :items="employees" :search="search"
            class="elevation-1" :style="{ 'width': useWidthTable().value + 'px','height':$vuetify.display.smAndDown ? '400px':'500px'}">
            <template v-slot:top>
                <div
                    class="d-flex flex-column text-center text-md-start flex-md-row justify-center align-center bg-whitesmoke mx-5 mb-2">
                    <span class="text-h6 text-md-h4  w-100 font-weigth-bold text-secondary">
                        Employee Localization</span>
                    <EmployeeFilter @onFilterApply="handleFilter" />
                </div>
                <v-sheet min-height="10" class="bg-secondary"></v-sheet>
            </template>
            <template v-slot:item.photo="{ item }">
                <v-sheet class="d-flex justify-end rounded-xl" color="transparent" width="100%">
                    <div v-tooltip:bottom="'Click to see more'">
                        <v-img class="ma-4 cursor-pointer rounded-circle" style="width:56px;height: 56px;"
                            :src="item.photo"></v-img>
                    </div>
                </v-sheet>
            </template>
        </v-data-table>
    </v-container>
</template>

<style>
.v-data-table__tr:hover {
    background-color: #EFEFEF;
    cursor: pointer
}
</style>