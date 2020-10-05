<template>
  <div>
    <div class="demo-wrapper">
      <p>
     The basic use of the drawer component is very simple. Let's start by saying that it contains
      a public method called "open" which must be called externally to make our drawer open.the open method will act
       on a prop of the drawer, called "opened" which, when set to true, will open our drawer
      </p>
      <p class=centered>
       A simple example would be a button that calls the works open like this:
      </p> 
     
     
      <code align=center class="flat">{{ markupBasic }}<br>{{markupBasic2}}<br>{{markupBasic3}}<br>{{markupBasic4}}<br>{{markupBasic5}}</code>
      <br>
      <br>
    <p  class="centered"> for example using the example of the button provided above, we will obtain the following drawer as a result:</p>
    <br>
    <br>
    
    <kup-button align=center v-on:kupButtonClick="Updrawer" class="hydrated handles-custom-style"  icon label="open drawer" id="side-drawer-btn" icon-off></kup-button>
    <kup-drawer id="firstdrawer">
      
      
     <span slot="title">Title</span>
      <span slot="subtitle">subtitle</span>
  
      
     
      <nav class="side-nav" slot="MainContent">
              <kup-list show-icons class="handles-custom-style hydrated" v-bind:data="listdate"  display-mode="description" filter role-type="listbox" selectable ></kup-list>
      
      </nav>
    </kup-drawer>
    

    </div>
  </div>
</template>

<script>


export default {
  name: 'ComboboxBasic',
  data() {
    return {
      markupBasic1: '<kup-button class="hydrated handles-custom-style"  icon label="open drawer" id="side-drawer-btn" icon-off></kup-button>' ,
      markupBasic2:'const bot = document.querySelector("kup-button"); ',
      markupBasic3:'const sideDrawer = document.querySelector("kup-drawer");',
      markupBasic4:'function openDrawer() {  if (!sideDrawer.opened) {  sideDrawer.open(); }  }',
      markupBasic5:'bot.addEventListener("kupButtonClick",openDrawer);',
      listdate:[
       {
    "text": "First choice",
    "value": "1",
    "icon": "add_alert",
    "trailingIcon": true,
    "selected": false
  },
  {
    "text": "Selected choice",
    "value": "2",
    "selected": false,
    "icon": "ac_unit"
  },
  
  {
    "text": "Third choice",
    "value": "3",
    "icon": "3d_rotation",
    "selected": true
  }
],

    };
    
  },
  methods: {
    Updrawer: function () {
      
      const sideDrawer = document.getElementById("firstdrawer");
      if(!sideDrawer.opened)
      {
        sideDrawer.open();
      }
      
      
    }
  },

};
</script>
