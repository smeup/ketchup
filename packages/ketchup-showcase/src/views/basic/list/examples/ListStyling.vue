<template>
  <div>
    <div class="demo-wrapper">
      <p>
        List description can be split into two rows by setting to true the
        <span
          class="code-word"
        >twoLine</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list selectable="false" two-line :data.prop="dataLIST" role-type="listbox"></kup-list>
        </div>
        <p class="centered">Sample two line markup</p>
        <code class="flat">{{ markupTwoline }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It's possible to display icons associated to rows inside the data prop by setting the
        <span
          class="code-word"
        >showIcons</span> prop to true.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list show-icons selectable="false" :data.prop="dataLIST" role-type="listbox"></kup-list>
        </div>
        <p class="centered">Sample two line markup</p>
        <code class="flat">{{ markupIcons }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListStyling',
  data() {
    return {
      dataLIST: [
        {
          text: 'First item',
          secondaryText: 'I am a description',
          value: '1',
          icon: 'filter_1',
        },
        {
          text: 'Second item',
          secondaryText: 'I am a description',
          value: '2',
          icon: 'filter_2',
        },
        {
          text: 'Third item',
          secondaryText: 'I am a description',
          value: '3',
          icon: 'filter_3',
        },
      ],
      markupTwoline: '<kup-list two-line></kup-list>',
      markupIcons: '<kup-list show-icons></kup-list>',
    };
  },
};
</script>
