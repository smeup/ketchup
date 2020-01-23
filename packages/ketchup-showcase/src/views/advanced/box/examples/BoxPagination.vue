<template>
  <div>
    <h3>Box with pagination</h3>
    <kup-box :data.prop="paginationData" pagination pageSize="10"></kup-box>
  </div>
</template>

<script>
import { createData } from '@/mock/box';

export default {
  data() {
    const paginationData = createData(100);

    return {
      paginationData,
    };
  },
};
</script>
