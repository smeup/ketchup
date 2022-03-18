<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The are different layouts in which the list component can be displayed.
        These layouts can be set through the
        <span class="code-word">roleType</span> prop. To enable the selection,
        the <span class="code-word">selectable</span> prop must be set to true.
      </p>
      <br />
      <p>
        The basic display layout is a simple list, the value in this case has to
        be set to
        <span class="code-word">listbox</span> , which is also the default of
        the <span class="code-word">roleType</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list :data.prop="dataLIST" role-type="listbox"></kup-list>
        </div>
        <p class="centered">Sample listbox markup</p>
        <code class="flat">{{ markupListbox }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The second layout is a list of radio buttons. To activate it the
        <span class="code-word">roleType</span> prop must be set to
        <span class="code-word">radiogroup</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list :data.prop="dataLIST" role-type="radiogroup"></kup-list>
        </div>
        <p class="centered">Sample radiogroup markup</p>
        <code class="flat">{{ markupRadiogroup }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The last layout is a list of checkboxes, which behaves as a multi
        selection list. The value of
        <span class="code-word">roleType</span> to activate this layout is
        <span class="code-word">group</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list :data.prop="dataLIST" role-type="group"></kup-list>
        </div>
        <p class="centered">Sample group markup</p>
        <code class="flat">{{ markupGroup }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSelection',
  data() {
    return {
      dataLIST: [
        {
          value: 'First item',
          id: '1',
          selected: true,
        },
        {
          value: 'Second item',
          id: '2',
        },
        {
          value: 'Third item',
          id: '3',
        },
      ],
      markupListbox: '<kup-list role-type="listbox"></kup-list>',
      markupRadiogroup: '<kup-list role-type="radiogroup"></kup-list>',
      markupGroup: '<kup-list role-type="group"></kup-list>',
    };
  },
};
</script>
