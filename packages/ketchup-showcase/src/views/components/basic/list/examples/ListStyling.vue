<template>
  <div>
    <div class="demo-wrapper">
      <p>
        List description can be split into two rows by setting to true the
        <span class="code-word">twoLine</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list
            selectable="false"
            two-line
            :data.prop="dataLIST"
            role-type="listbox"
          ></kup-list>
        </div>
        <p class="centered">Sample two line markup</p>
        <code class="flat">{{ markupTwoline }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        It's possible to display icons associated to rows inside the data prop
        by setting the
        <span class="code-word">showIcons</span> prop to true.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list
            two-line
            show-icons
            selectable="false"
            :data.prop="dataLIST"
            role-type="listbox"
          ></kup-list>
        </div>
        <p class="centered">Sample icons markup</p>
        <code class="flat">{{ markupIcons }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        Icons can be also displayed without any text beside them by setting to
        true the
        <span class="code-word">hideText</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-list
            hide-text
            show-icons
            selectable="false"
            :data.prop="dataLIST"
            role-type="listbox"
          ></kup-list>
        </div>
        <p class="centered">Sample icons without text markup</p>
        <code class="flat">{{ markupIconsHideText }}</code>
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
          value: 'First item',
          secondaryText: 'I am a description',
          id: '1',
          icon: 'filter_1',
        },
        {
          value: 'Second item',
          secondaryText: 'I am a description',
          id: '2',
          icon: 'filter_2',
        },
        {
          value: 'Third item',
          secondaryText: 'I am a description',
          id: '3',
          icon: 'filter_3',
        },
      ],
      markupTwoline: '<kup-list two-line></kup-list>',
      markupIcons: '<kup-list show-icons></kup-list>',
      markupIconsHideText: '<kup-list hide-text show-icons></kup-list>',
    };
  },
};
</script>
