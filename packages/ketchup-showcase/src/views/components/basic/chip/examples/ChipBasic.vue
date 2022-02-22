<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Chips are commonly used when there is a list of labels or tags. The chip
        options can be set through the <span class="code-word">data</span> prop,
        which is structured like this:
        <br />
        <br />
        <span class="code-word">id</span> is mandatory and defines the unique
        identifier of the chip.
        <br />
        <span class="code-word">icon</span> defines the icon displayed inside
        the component, it is not mandatory.
        <br />
        <span class="code-word">value</span> defines the text displayed inside
        the component.
        <br />
        <span class="code-word">obj</span> defines the
        <span class="code-word">KupObj</span> tied to that chip.
        <br />
        <span class="code-word">title</span> defines the text displayed when
        hovering on the element with the mouse.
        <br />
        <span class="code-word">checked</span> defines whether the chip is
        selected or not, this is true for chip set defined as
        <span class="code-word">choice</span> or
        <span class="code-word">filter</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data"></kup-chip>
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
          id: 'text',
          value: 'Text only',
          checked: false,
        },
        {
          id: 'icon',
          icon: 'widgets',
          value: 'With icon',
          checked: false,
        },
      ],
      markupBasic: '<kup-chip></kup-chip>',
      markupObject:
        "{ id: 'text', value: 'Text only' }, { id: 'icon', icon: 'widgets', value: 'With icon'}",
    };
  },
};
</script>
