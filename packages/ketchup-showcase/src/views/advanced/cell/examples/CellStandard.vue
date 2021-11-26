<template>
  <div>
    <h4>Simple text</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="simpleTextData"></kup-cell
    ></div>
    <h4>Button</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="buttonData"></kup-cell
    ></div>
    <h4>Date</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="dateData"></kup-cell
    ></div>
    <h4>Editable text</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="editableData"></kup-cell
    ></div>
    <h4>Checkbox</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="checkboxData"></kup-cell
    ></div>
    <h4>Styled</h4>
    <div class="centered"
      ><kup-cell drag-enabled="true" :data.prop="styledData"></kup-cell
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CellStandard',
  data() {
    return {
      simpleTextData: getSimpleTextData(),
      buttonData: getButtonData(),
      dateData: getDateData(),
      editableData: getEditableTextData(),
      checkboxData: getCheckBoxData(),
      styledData: getStyledData(),
    };
  },
};

function getSimpleTextData() {
  return { value: 'Simple text content' };
}

function getButtonData() {
  return {
    obj: {
      t: 'J4',
      p: 'BTN',
      k: '',
    },
    data: {
      icon: 'favorite',
      label: 'Button',
    },
  };
}

function getDateData() {
  return {
    obj: {
      t: 'D8',
      p: '*YYMD',
      k: '20211101',
    },
    value: '2021-11-01',
    title: 'Simple date',
    icon: 'calendar',
  };
}

function getEditableTextData() {
  return { value: 'Editable text content', isEditable: true };
}

function getCheckBoxData() {
  return {
    obj: {
      t: 'V2',
      p: 'SI/NO',
      k: '',
    },
    data: {
      checked: true,
    },
  };
}

function getStyledData() {
  return {
    obj: {
      t: 'D8',
      p: '*YYMD',
      k: '20211101',
    },
    value: '2021-11-01',
    title: 'Simple date',
    style: {
      color: 'green',
      'background-color': 'yellow',
    },
  };
}
</script>
