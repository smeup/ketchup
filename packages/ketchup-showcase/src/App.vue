<template>
    <div id="app">
        <SmeupLabel
            content="Test"
            color="#CCCCCC"
            align="center"
            @click="onLabelClick"
        />

        <SmeupFld
            id="fld1"
            type="Itx"
            initialValue="asd"
            label="InputText"
            showSubmit
            mobile
            clearValue
            @change="onFldChange"
            @click="onFldClick"
        />

        <SmeupMatrix
            :filterable="true"
            :sortable="true"
            :grouping="false"
            :data="data"
            :selRecord="1"
            @rowselected="onRowSelected"
        />
        <MAT :content="matrixData">CIAO</MAT>

        <ketchup-fld
            id="fld1"
            first="Runaways"
            last="'Call me any time"
        ></ketchup-fld>
        <ketchup-button label="Sono bottone"></ketchup-button>
        <ketchup-radio id="krg1"></ketchup-radio>
        <ketchup-text-input
            id="int1"
            is-clearable
            initial-value="ciao"
        ></ketchup-text-input>
        <ketchup-combo
            initial-value="sono di prova"
            is-clearable
        ></ketchup-combo>
    </div>
</template>

<script>
import importedData from './mock/dataTable';
import importedMData from './mock/matrixData';

export default {
    name: 'app',
    data() {
        return {
            data: importedData,
        };
    },

    methods: {
        onFldChange() {
            // TODO
        },

        onFldClick() {
            // TODO
        },
    },
    computed: {
        matrixData() {
            return importedMData;
        },
    },
};
</script>

<style></style>
