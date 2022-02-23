<template>
  <div>
    <div class="demo-wrapper">
      <div v-for="param in basicParam" :key="param.parameter">
        <ul>
          <li>
            <span class="code-word">{{ param.parameter }}</span
            >: {{ param.description }}
          </li>
          <hr />
        </ul>
      </div>
      <br />
      <code class="flat">{{ markupBasic }}</code>
      <br />
      <code class="flat"
        >{{ markupBasic2 }}<br />{{ markupBasic3 }}<br />{{ markupBasic4
        }}<br />{{ markupBasic5 }}<br />{{ markupBasic6 }}</code
      >
      <br />
      <p> Output: </p>
      <img src="images/qlik/kup-qlik_bordered_false.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QlikBasic',
  data() {
    return {
      basicParam: [
        {
          parameter: 'qlik',
          description:
            'represents the qlik server instance (from here it is possible to use the API), variable that is set after connecting to the server (procedure to be implemented externally)',
        },
        {
          parameter: 'config',
          description: 'parameters used to connect to the qlik server',
        },
        {
          parameter: 'grid',
          description:
            'JSON parameter that identifies the structure of the grid to represent',
        },
        {
          parameter: 'appid',
          description: 'unique id of the qlik app',
        },
        {
          parameter: 'id',
          description: 'id of the HTML tag',
        },
      ],
      markupBasic:
        '<kup-qlik id="qlik-obj" appid = "c9f6a87b-0027-40dc-b439-8171b7457031" qlik="qlik"></kup-qlik>',
      markupBasic2: "  let element = document.getElementById('qlik-obj')",
      markupBasic3:
        "  element.config = { host:'itcldsrv017', port:'80', prefix:'hdr', isSecure:false }",
      markupBasic4: '  element.grid = {',
      markupBasic5:
        "      rows:[{columns:[{ obj:'KvqdmD', colDim:12, size:'M'}]}]",
      markupBasic6: '  }',
    };
  },
};
</script>
