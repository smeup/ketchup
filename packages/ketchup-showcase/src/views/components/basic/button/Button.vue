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
      <button-with-spinner></button-with-spinner>
    </template>
    <template v-slot:4>
      <button-icon-variant></button-icon-variant>
    </template>
    <template v-slot:5>
      <button-disabled></button-disabled>
    </template>
  </comp>
</template>

<script>
import ButtonDemo from '@/views/components/basic/button/examples/ButtonDemo';
import ButtonBasic from '@/views/components/basic/button/examples/ButtonBasic';
import ButtonStyling from '@/views/components/basic/button/examples/ButtonStyling';
import ButtonWithSpinner from '@/views/components/basic/button/examples/ButtonWithSpinner';
import ButtonDisabled from '@/views/components/basic/button/examples/ButtonDisabled';
import ButtonIconVariant from '@/views/components/basic/button/examples/ButtonIconVariant';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    ButtonDemo,
    ButtonBasic,
    ButtonStyling,
    ButtonWithSpinner,
    ButtonDisabled,
    ButtonIconVariant,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-button',
      headtitle: 'Button',
      titles: [
        'Playground',
        'Basic usage',
        'Styling',
        'With spinner',
        'Icon button variant',
        'Disabled',
      ],
    };
  },
  title: 'Ketchup | Button',
};
</script>
