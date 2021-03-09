<template>
  <div>
    <div class="demo-wrapper">
      <div v-for="prop in DashListProp" :key="prop.property">
        <ul>
          <li>
            <span class="code-word">
              {{ prop.property }}
            </span>
            <br />
            <span class="code-word"> Attribute: </span>{{ prop.attribute }}
            <br />
            <span class="code-word"> Type: </span>{{ prop.type }}
            <br />
            <span class="code-word"> Default: </span>{{ prop.default }}
            <br />
          </li>
          <hr />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashListProperties',
  data() {
    return {
      DashListProp: [
        {
          property: 'active',
          attribute: 'active',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'columnsNumber',
          attribute: 'columns-number',
          type: 'number',
          default: '1',
        },
        {
          property: 'data',
          attribute: '--',
          type: 'TableData',
          default: 'undefined',
        },
        {
          property: 'fontsize',
          attribute: 'fontsize',
          type: 'string',
          default: "''",
        },
        {
          property: 'fullWidth',
          attribute: 'full-width',
          type: 'boolean',
          default: 'true',
        },
        {
          property: 'horizontal',
          attribute: 'horizental',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'iconColor',
          attribute: '--',
          type: 'any[]',
          default: '[]',
        },
        {
          property: 'layout',
          attribute: 'layout',
          type: 'string',
          default: "'1'",
        },
        {
          property: 'textColor',
          attribute: '--',
          type: 'any[]',
          default: '[]',
        },
        {
          property: 'valueColor',
          attribute: '--',
          type: 'any[]',
          default: '[]',
        },
      ],
    };
  },
};
</script>
