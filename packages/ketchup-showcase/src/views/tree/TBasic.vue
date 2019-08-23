<template>
    <div>
        <h1>Basic Tree Features</h1>

        <h3>Without configuration</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
        />



    </div>
</template>

<script>
    import {
        TreeFactory,
    } from '@/mock/TreeFaker';

    export default {
        name: "TBasic",
        data() {
            return {
                basicData: TreeFactory(),
            }
        }
    }
</script>