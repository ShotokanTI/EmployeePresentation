<script setup>
const employeesList = useEmployeeList()
</script>

<template>
    <employee-details :employees="employeesList"></employee-details>
</template>