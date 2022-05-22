<template>
  <NuxtLayout name="menulayout">
    <el-link href="https://element-plus.org/en-US/component/container.html#example">
      <h1>Element UI Example</h1>
    </el-link>
    <el-scrollbar>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-scrollbar>
    <el-button class="m-4">Hello</el-button>
  </NuxtLayout>
</template>

<script setup>
import { ElLink, ElTable, ElTableColumn, ElScrollbar, ElButton } from 'element-plus';

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
};
const tableData = ref(Array.from({ length: 20 }).fill(item));

definePageMeta({
  layout: false,
});
</script>
