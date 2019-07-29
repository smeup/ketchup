<template>
    <div>
        <h1>Data Table</h1>

        <h3>Without configuration</h3>
        <kup-data-table
            :data.prop="data"
            enable-sortable-columns
            @kupOptionClicked="handleKupOptionClicked"
        />

        <h3>Hidden columns</h3>
        <kup-data-table
            :data.prop="hiddenColumnsData"
            :enableSortableColumns.prop="true"/>
    </div>
</template>

<script>
import {
    defaultDataTable,
    // cellStyleDataTable,
    hiddenColumnsData,
    // iconImagesDataTable,
} from '@/mock/dataTable';

export default {
    name: "DTSortableColumns",
    data() {
        return {
            data: {
                ...defaultDataTable,
            },
            hiddenColumnsData: { ...hiddenColumnsData },
            /*cellStyleData: { ...cellStyleDataTable },
            iconImagesDataTable: { ...iconImagesDataTable },
            columnsWidth: [
                {
                    column: 'FLD1',
                    width: 100,
                },
                {
                    column: 'FLD3',
                    width: 300,
                },
            ],
            loadQuantity: ''*/
        };
    },

    methods: {
        handleKupOptionClicked({ detail }) {
            console.log('detail', detail);
        },
        /*
        onObjMatrix(e) {
            console.log("the matrix obj", e);
        },
        onLoadMoreClick(e) {
            this.loadQuantity = e.detail.loadItems.toString();
        }
        */
    },
};
</script>