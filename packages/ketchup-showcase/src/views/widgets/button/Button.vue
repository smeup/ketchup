<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <button-basic></button-basic>
    </template>
    <template v-slot:1>
      <button-styling></button-styling>
    </template>
    <template v-slot:2>
      <button-icon-variant></button-icon-variant>
    </template>
    <template v-slot:3>
      <button-disabled></button-disabled>
    </template>
    <template v-slot:4>
      <button-customization></button-customization>
    </template>
  </comp>
</template>

<script>
import ButtonBasic from '@/views/widgets/button/examples/ButtonBasic';
import ButtonStyling from '@/views/widgets/button/examples/ButtonStyling';
import ButtonDisabled from '@/views/widgets/button/examples/ButtonDisabled';
import ButtonIconVariant from '@/views/widgets/button/examples/ButtonIconVariant';
import ButtonCustomization from '@/views/widgets/button/examples/ButtonCustomization';
import Comp from '@/views/components/page/templates/Comp';
export default {
  components: {
    ButtonBasic,
    ButtonStyling,
    ButtonDisabled,
    ButtonIconVariant,
    ButtonCustomization,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-button',
      headtitle: 'Button',
      titles: [
        'Basic usage',
        'Styling',
        'Icon button variant',
        'Disabled',
        'Customization',
      ],
    };
  },
};
</script>
