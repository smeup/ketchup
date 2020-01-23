<template>
  <div>
    <h3>A basic checkbox menu</h3>
    <kup-checkbox-menu
      :items.prop="baseMenu"
      @kupCheckboxMenuSelected="logSelectedItems"
    />

    <h3>A disabled checkbox menu</h3>
    <kup-checkbox-menu
      :items.prop="disabledMenu"
      disabled
      @kupCheckboxMenuSelected="logSelectedItems"
    />

    <h3>A disabled checkbox menu</h3>
    <kup-checkbox-menu
      :items.prop="displayedFieldMenu"
      :displayedField.prop="'description'"
      @kupCheckboxMenuSelected="logSelectedItems"
    />
  </div>
</template>

<script>
  function generateCheckboxMenuItems(itemCount = 20, valueFieldLabel = 'id', displayedFieldLabel = 'description') {
    let items = [];

    for (let i = 0; i < itemCount; i++) {
      items.push({
        [valueFieldLabel]: 'itm' + (i + 1),
        [displayedFieldLabel]: 'Item n°' + (i + 1)
      });
    }

    return items;
  }

  export default {
    name: "MenuCheckbox",
    data() {
      return {
        baseMenu: generateCheckboxMenuItems(),
        disabledMenu: generateCheckboxMenuItems(),
        displayedFieldMenu: generateCheckboxMenuItems(),
      };
    },
    methods: {
      logSelectedItems(e) {
        console.log("Selected items", e.detail);
      }
    }
  }
</script>