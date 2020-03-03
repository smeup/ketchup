<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Chips are commonly used when there is a list of labels or tags. The
        chip set data is containerd in the
        <span class="code-word">data</span> prop, which is structured like this:
        <br />
        <br />
        <span class="code-word">value</span> is mandatory and defines the value
        of the chip.
        <br />
        <span class="code-word">icon</span> defines the icon to be displayed
        inside the component, it is not mandatory.
        <br />
        <span class="code-word">label</span> defines the text to be displayed
        inside the component.
        <br />
        <span class="code-word">checked</span> defines whether the chip is
        selected or not, this is true for chip set defined as
        <span class="code-word">choice</span> or
        <span class="code-word">filter</span>.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-chip :data.prop="data"></wup-chip>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
        <p class="centered">Sample object</p>
        <code class="flat">{{ markupObject }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipBasic',
  data() {
    return {
      data: [
        {
          value: 'text',
          label: 'Text only',
          checked: false,
        },
        {
          value: 'icon',
          icon: 'widgets',
          label: 'With icon',
          checked: false,
        },
      ],
      markupBasic: '<wup-chip></wup-chip>',
      markupObject:
        "{ value: 'text', label: 'Text only', checked: false }, { value: 'icon', icon: 'widgets', label: 'With icon', checked: false}",
    };
  },
};
</script>
