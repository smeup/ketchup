<template>
  <div>
    <div id="container">
      <div v-for="property in dashProperties" :key="property.property">
        <ul>
          <li>
            <span class="code-word">{{ property.property }}</span
            >: {{ property.description }}
            <br />
            <span class="code-word">Attribute: </span>: {{ property.attribute }}
            <br />
            <span class="code-word">Type: </span>: {{ property.type }}
            <br />
            <span class="code-word">Default: </span>: {{ property.default }}
          </li>
          <hr />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashProperies',
  data() {
    return {
      dashProperties: [
        {
          property: 'active',
          attribute: 'active',
          description: 'The component can be clicked.',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'fontsize',
          attribute: 'fontsize',
          description: 'Sets the font size of the component.',
          type: 'string',
          default: "' '",
        },
        {
          property: 'index',
          attribute: 'index',
          description: 'No idea what this is about.',
          type: 'number',
          default: '0',
        },
        {
          property: 'layout',
          attribute: 'layout',
          description: 'Sets the layout of the component.',
          type: 'string',
          default: "'1'",
        },
      ],
    };
  },
};
</script>
