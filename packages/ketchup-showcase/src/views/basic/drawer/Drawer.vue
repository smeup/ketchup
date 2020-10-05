<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <button-demo></button-demo>
    </template>
    <template v-slot:1>
      <button-basic></button-basic>
    </template>
    <template v-slot:2>
      <button-styling></button-styling>
    </template>
    <template v-slot:3>
      <button-icon-variant></button-icon-variant>
    </template>
    <template v-slot:4>
      <button-disabled></button-disabled>
    </template>
  </comp>
</template>

<script>
import ButtonDemo from '@/views/basic/button/examples/ButtonDemo';
import ButtonBasic from '@/views/basic/button/examples/ButtonBasic';
import ButtonStyling from '@/views/basic/button/examples/ButtonStyling';
import ButtonDisabled from '@/views/basic/button/examples/ButtonDisabled';
import ButtonIconVariant from '@/views/basic/button/examples/ButtonIconVariant';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    ButtonDemo,
    ButtonBasic,
    ButtonStyling,
    ButtonDisabled,
    ButtonIconVariant,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-button',
      headtitle: 'Drawer',
      titles: [
        'Playground',
        'Basic usage',
        'Styling',
        'Icon button variant',
        'Disabled',
      ],
    };
  },
};
</script>
