<template>
  <div class="max-width-container">
    <h2>Dynamic Expansion Features</h2>

    <h3>Dynamic expansion</h3>
    <h5>
      <p>Dynamic expansion is active and no callback is set.<br>Update is triggered by the parent updating the reference of the data object.</p>
      <p>You can see more information being logged by opening the browser console.</p>
    </h5>
    <kup-tree
      :columns.prop="fakers.basic.columns"
      :data.prop="fakers.basic.data"
      use-dynamic-expansion
      @kupTreeNodeExpand="hdlExpandNode($event, 'basic')"
    />

    <h4>Same example as the previous one but with showColumns</h4>
    <kup-tree
      :columns.prop="fakers.basicTable.columns"
      :data.prop="fakers.basicTable.data"
      show-columns
      show-header
      use-dynamic-expansion
      @kupTreeNodeExpand="hdlExpandNode($event, 'basicTable')"
    />

    <h3>Dynamic expansion with callback set</h3>
    <h5>
      <p>Dynamic expansion is active and a callback is set.<br>Update is triggered by the parent updating the reference of the data object.</p>
    </h5>
    <kup-tree
      :columns.prop="fakers.useCallback.columns"
      :data.prop="fakers.useCallback.data"
      use-dynamic-expansion
      :dynamicExpansionCallback.prop="callbacks.useCallback"
      @kupTreeNodeExpand="hdlExpandNode($event, 'useCallback', {method: treeUpdateMethods.treeHasCallback})"
    />

    <h4>Same example as the previous one but with showColumns</h4>
    <kup-tree
      :columns.prop="fakers.useCallbackTable.columns"
      :data.prop="fakers.useCallbackTable.data"
      show-columns
      show-header
      use-dynamic-expansion
      :dynamicExpansionCallback.prop="callbacks.useCallbackTable"
      @kupTreeNodeExpand="hdlExpandNode($event, 'useCallbackTable', {method: treeUpdateMethods.treeHasCallback})"
    />
  </div>
</template>

<script>
  import {
    DynamicExpansionFaker,
  } from 'ketchup/src/components/kup-tree/kup-tree-faker';

  function kupTreeDynamicCallbackFactory(currentFaker) {
    return (treeNodeToExpand, treeNodePath) => currentFaker.getTreeNodeChildren(treeNodePath);
  }

  export default {
    name: "TDynamicExpansion",
    data() {
      const basic = DynamicExpansionFaker(3, 5),
        basicTable = DynamicExpansionFaker(3, 5),
        useCallback = DynamicExpansionFaker(3, 3),
        useCallbackTable = DynamicExpansionFaker(3, 3),
        // TODO horrible name, change it
        useCallbackCallback = kupTreeDynamicCallbackFactory(useCallback),
        useCallbackTableCallback = kupTreeDynamicCallbackFactory(useCallbackTable);

      return {
        callbacks: {
          useCallback: useCallbackCallback,
          useCallbackTable: useCallbackTableCallback,
        },
        fakers: {
          basic,
          basicTable,
          useCallback,
          useCallbackTable,
        },
        treeUpdateMethods: {
          changeDataRef: 1,
          // useEventCallback: 2,
          treeHasCallback: 3,
        }
      };
    },
    mounted() {
      console.log("basic faker", this.fakers.basic);
    },
    methods: {
      hdlExpandNode(
        { detail },
        fakerIndex,
        options = {
          method: this.treeUpdateMethods.changeDataRef,
        }
      ) {
        console.log("expand handler", detail);
        switch (options.method) {
          case this.treeUpdateMethods.changeDataRef:
            this.fakers.basic.getTreeNodeChildren(detail.treeNodePath)
              .then(children => {
                detail.treeNode.children = children;
                // Changes reference of the data element to allow
                this.fakers[fakerIndex].data = [...this.fakers[fakerIndex].data];
                console.log("Succesful fetching", "\noriginal event detail:", detail, "\nfetched children:", children);
              })
              .catch(err => {
                console.error("Error during fetch", err);
              });
            break;
          case this.treeUpdateMethods.treeHasCallback:
            console.warn("Expand handler with treeCallbackShould not emit an event: check out kup-tree for implementation details.");
            break;
          default:
            console.warn("Expand handler: no valid case passed!");
            break;
        }
      }
    }
  }
</script>