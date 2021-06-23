<template>
  <div>
    <div class="demo-wrapper">
      <div v-for="prop in qlikProps" :key="prop.property">
        <ul>
          <li>
            <span class="code-word">{{ prop.property }}</span
            >: {{ prop.description }}
            <br />
            <span class="code-word" v-if="prop.type !== ''"
              >Type: {{ prop.type }}</span
            >
            <br />
            <a
              v-if="prop.property == 'appid'"
              href="https://support.qlik.com/articles/000026239"
              target="_blank"
            >
              More information
            </a>

            <div
              v-if="prop.property == 'grid'"
              style="padding-left: 30px; display: block"
            >
              <div v-for="prm in gridStructure" :key="prm.parameter">
                <li>
                  <span class="code-word">{{ prm.parameter }}</span
                  >: {{ prm.description }}
                </li>
              </div>
            </div>
            <br />
            <div v-if="prop.property == 'grid'">
              <div>
                <code class="flat"
                  >{{ markupBasic1 }}<br />{{ markupBasic2 }}<br />{{
                    markupBasic3
                  }}<br />{{ markupBasic4 }}<br />{{ markupBasic5 }}</code
                >
              </div>
              <p> Output: </p>
              <img :src="gridOutput" style="width: 606px" />
            </div>
            <a
              v-if="prop.property == 'grid'"
              href="https://help.qlik.com/en-US/sense-developer/June2020/Subsystems/Mashups/Content/Sense_Mashups/Howtos/mashups-obtain-app-object-id.htm"
              target="_blank"
            >
              More information
            </a>

            <br />

            <div v-if="prop.property == 'config'">
              <br />
              <code class="flat">{{ configCode }}<br /></code>
            </div>

            <div v-if="prop.property == 'bordered'">
              <br />
              <p> Bordered True: </p>
              <img :src="borderedTrue" />
              <br />
              <p> Bordered False: </p>
              <img :src="borderedFalse" />
            </div>
          </li>
          <hr />
        </ul>
      </div>
      <div>
        <p>For more information visit github page</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QlikProperties',
  data() {
    return {
      qlikProps: [
        {
          property: 'app',
          description:
            "Set Qlik App's istance would you like to use and it represents the connection with the qlik server. Please note that if you have already set appid, the app's istance will be NOT generated again.",
          type: '',
        },
        {
          property: 'appid',
          description: "Set Qlik App's id",
          type: 'string',
        },
        {
          property: 'bordered',
          description:
            'Property of type boolean if it is true each qlik object is outlined',
          type: 'boolean',
        },
        {
          property: 'config',
          description:
            'JSON property that identifies the connection parameters to the qlik server, the basic format is as follows:',
          type: 'QlikServer',
        },
        {
          property: 'debug',
          description: 'Activate logging Default false',
          type: 'boolean',
        },
        {
          property: 'defobjsize',
          description: "Set default obj's container pixel height",
          type: 'string',
        },
        {
          property: 'fluid',
          description:
            'Property of type boolean if it is false the width of the grid is fixed at 1200px if it is true the grid becomes responsive. (default false)',
          type: 'boolean',
        },
        {
          property: 'grid',
          description: 'Set the grid structure (JSON) selections',
          type: 'KupQlikGrid[]',
        },
        {
          property: 'qlik',
          description:
            'Set Qlik Server istance would you like to use after connection. To value the qlik variable, the connection to the qlik server must be made externally via the API, implementing a procedure ad or c.',
          type: '',
        },
      ],
      configCode: "{host:'', port:'', prefix:'', isSecure:<true/false>}",

      gridStructure: [
        {
          parameter: 'selections',
          description: 'Data selection array',
        },
        {
          parameter: 'field',
          description: 'Qlik field on which to make the selection',
        },
        {
          parameter: 'values',
          description: 'Array of int or string value which to select rows',
        },
        {
          parameter: 'colums',
          description: 'they define the structure of grid',
        },
        {
          parameter: 'obj',
          description: 'Qlik Object id would you like to render',
        },
        {
          parameter: 'colDim',
          description:
            "define column's dimension, it could have values from 1 to 12 where 12 is 100%",
        },
        {
          parameter: 'size',
          description:
            "define size height of obj's div container, it colud have this values XS|S|M|L|XL  ",
        },
        {
          parameter: 'noSelections',
          description:
            'define if selections in object are disable (default: false)',
        },
      ],
      borderedTrue: 'images/qlik/kup-qlik_bordered_true.png',
      borderedFalse: 'images/qlik/kup-qlik_bordered_false.png',
      gridOutput: 'images/qlik/kup-qlik_esempio_grid.png',
      markupBasic1: "{selections:[{field: 'Anno',values:[2020]}],",
      markupBasic2: ' rows:[',
      markupBasic3:
        "      {columns:[{obj:'KvqdmD', colDim:6, size:'S'},{obj:'JjSaVm', colDim:6, size:'S'}]},",
      markupBasic4:
        "      {columns:[{obj:'ABCD', colDim:6, size:'S'},{obj:'EFGH', colDim:6, size:'S'}]}",
      markupBasic5: '      ]}',
    };
  },
};
</script>
