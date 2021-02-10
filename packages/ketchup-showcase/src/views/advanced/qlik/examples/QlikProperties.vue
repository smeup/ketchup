<template>
  <div>
    <div class="demo-wrapper">
      <div v-for="prop in qlikProps" :key="prop.property">
        <ul>
          <li>
            <span class="code-word">{{prop.property}}</span>: {{prop.description}}
            <br>
            <a 
              v-if="prop.property == 'appid'" 
              href="https://support.qlik.com/articles/000026239" 
              target="_blank">
              For more information
            </a>
            <a 
              v-if="prop.property == 'grid'" 
              href="https://help.qlik.com/en-US/sense-developer/June2020/Subsystems/Mashups/Content/Sense_Mashups/Howtos/mashups-obtain-app-object-id.htm"
              target="_blank">
              For more information
            </a>
            <br>
            <span class="code-word" v-if="prop.type !== ''">Type: {{ prop.type }}</span>
            <div v-if="prop.property == 'config'">
              <br>
              <p class="centered">Sample config</p>
              <code class="flat">{{ configCode }}<br /></code>
            </div>
          </li>
          <hr>
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
          property: "app",
          description: "Set Qlik App's istance would you like to use and it represents the connection with the qlik server. Please note that if you have already set appid, the app's istance will be NOT generated again.",
          type: ""
        },
        {
          property: "appid",
          description: "Set Qlik App's id",
          type: "string"
        },
        {
          property: "bordered",
          description: "Set grid border",
          type: "boolean"
        },
        {
          property: "config",
          description: "Set Qlik Server's connection parameters MUST be declared to open apps",
          type: "QlikServer"
        },
        {
          property: "debug",
          description: "Activate logging Default false",
          type: "boolean"
        },
        {
          property: "defobjsize",
          description: "Set default obj's container pixel height",
          type: "string"
        },
        {
          property: "fluid",
          description: "Define width of grid, with true width = 100% responsive, false 1200px",
          type: "boolean"
        },
        {
          property: "grid",
          description: "Set the grid structure (JSON) selections",
          type: "KupQlikGrid[]"
        },
        {
          property: "qlik",
          description: "Set Qlik Server istance would you like to use after connection",
          type: ""
        },
      ],
      configCode: "{host:'', port:'', prefix:'', isSecure:<true/false>}",
    };
  },
};
</script>
