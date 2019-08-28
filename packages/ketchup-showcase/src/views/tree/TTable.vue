<template>
    <div>
        <h1>Tree in table format</h1>

        <h3>Without configuration</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            show-columns/>

        <h3>Show header visible</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            show-columns
            show-header/>

        <h3>When showHeader is active but showColumns is disabled</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            show-header/>

        <h3>With show objectNavigation active</h3>
        <kup-tree
            :columns.prop="basicData.columns"
            :data.prop="basicData.data"
            show-columns
            show-header
            show-object-navigation
            @kupTreeNodeOptionClicked="hdlOptionClicked"
        />
        <code>Cell: {{ optionObj.cell }}<br>Column: {{ optionObj.column }}<br>TreeNode: {{ optionObj.treeNode }}</code>

        <h3>When expand flag is set to true</h3>
        <kup-tree
            :columns.prop="expandedData.columns"
            :data.prop="expandedData.data"
            expanded
            show-columns
            show-header/>
    </div>
</template>

<script>
import {
    TreeFactory,
} from '@/mock/TreeFaker';

export default {
    name: "TTable",
    data() {
        return {
            basicData: TreeFactory(),
            expandedData: TreeFactory(2,3),
            optionObj: {
                cell: "",
                column: "",
                treeNode: "",
            }
        };
    },
    methods: {
        hdlOptionClicked({detail}) {
            console.log("zio appp", detail);
            this.optionObj.cell = JSON.stringify(detail.cell);
            this.optionObj.column = JSON.stringify(detail.column);
            this.optionObj.treeNode = JSON.stringify(detail.treeNode).substr(0,300) + ' ...';
        }
    }
}
</script>