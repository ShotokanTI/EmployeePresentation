<script setup lang="ts">
import employees from '~~/mocks/employee/data/employee.data';

</script>

<template>
    <div>
        <EmployeeList :employees="employees"></EmployeeList>
    </div>
</template>