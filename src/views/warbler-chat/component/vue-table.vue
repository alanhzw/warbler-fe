<template>
  <div class="table-wrap">
    <div>123</div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<style lang="scss" scoped>
.table-wrap {
  width: 100%;
  background-color: var(--warbler-bg-card);
  border-radius: 4px;
  overflow: hidden;
  padding: 20px 0;
  ::v-deep(.el-table) {
    color: initial;
    --el-table-row-hover-bg-color: rgba(230, 230, 241, 0.06) !important;
    --el-table-border-color: #4e4f6c;
  }
  ::v-deep(.el-table tr) {
    background: transparent;
  }
  ::v-deep(.el-table th.el-table__cell) {
    background: transparent;
  }
  ::v-deep(.el-table thead) {
    color: initial;
  }
  ::v-deep(.el-table thead .cell) {
    font-weight: 100;
  }
  ::v-deep(.el-table__header-wrapper) {
    border-top: 1px solid #4e4f6c;
  }
}
</style>
