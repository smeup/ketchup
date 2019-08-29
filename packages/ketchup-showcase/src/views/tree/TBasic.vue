<template>
    <div>
        <h1>Basic Tree Features</h1>

        <h3>Without configuration</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
        />

        <h3>Tree Nodes icons are hidden</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            :showIcons.prop="false"
        />

        <h3>With show objectNavigation active</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            show-object-navigation
        />

        <h3>Automatically expanded tree</h3>
        <kup-tree
            :columns.prop="expandedData.columns"
            :data.prop="expandedData.data"
            expanded
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
                expandedData: TreeFactory(3,3),
            }
        }
    }
</script>