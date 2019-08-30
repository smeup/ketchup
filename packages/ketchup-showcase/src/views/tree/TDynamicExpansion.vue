<template>
    <div>
        <h2>Basic Tree Features</h2>

        <h3>Without configuration</h3>
        <kup-tree
          :columns.prop="fakers.basic.columns"
          :data.prop="fakers.basic.data"
          @kupTreeNodeExpand="hdlExpandNode($event, 'basic')"
        />
    </div>
</template>

<script>
    import {
        DynamicExpansionFaker,
    } from 'ketchup/src/components/kup-tree/kup-tree-faker';

    export default {
        name: "TDynamicExpansion",
        data() {
            return {
                fakers: {
                    basic: DynamicExpansionFaker(3,5)
                }
            };
        },
        methods: {
            hdlExpandNode(e, fakerIndex) {
                console.log("expand handler", e);
                //this.fakers.basic.getTreeNodeChildren();
            }
        }
    }
</script>