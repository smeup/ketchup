<template>
  <div>
    <div class="demo-wrapper">
    
    
      The drawer component also has 2 useful props,<div color=red> Right and Permanent.</div>
      <br>
      <br>
      
     <p class="centered">adding the right attribute to our component for example we will have this result</p>
      <code align=center class="flat">{{ markupBasic }}<br>{{markupBasic2}}<br>{{markupBasic3}}<br>{{markupBasic4}}<br>{{markupBasic5}}<br>{{markupBasic6}}<br>{{markupBasic7}}</code>
      <br>
      <br>
        <p  class="centered"> Test your right prop using the botton below:</p>
    <kup-button right align=center v-on:kupButtonClick="Updrawer1" class="hydrated handles-custom-style"  icon label="open drawer" id="side-drawer-btn" icon-off></kup-button>
    <kup-drawer right id='seconddrawer'>
      
      
     <span slot="title">Title</span>
      <span slot="subtitle">subtitle</span>
  
      
     
      <nav class="side-nav" slot="MainContent">
              <kup-list show-icons class="handles-custom-style hydrated" v-bind:data="listdate"  display-mode="description" filter role-type="listbox" selectable ></kup-list>
      
      </nav>
    </kup-drawer>
    <br>
    <br>
    <br>
    
     <p>
       Similarly to right, the "permanent" Prop can be added which can be used combined with "right" or without "right".
        The "permanent" makes sure that our drawer always remains fixed without disappearing when we click out of it.
     </p>
     <br>
      <p class="centered">example of use:</p>
      <code align=center class="flat">{{ markupBasic8 }}<br>or<br>{{markupBasic9}}<br></code>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerProp',
  data() {
    return {
      markupBasic:'<kup-drawer right>',
      markupBasic2:'<span slot="title">Title</span> ',
      markupBasic3:'<span slot="subtitle">subtitle</span>',
      markupBasic4:'<nav class="side-nav" slot="MainContent">',
      markupBasic5:'<kup-list show-icons class="handles-custom-style hydrated" data   display-mode="description" filter role-type="listbox" selectable ></kup-list>',
      markupBasic6:'</nav>',
      markupBasic7:'</kup-drawer>',
      markupBasic8:'<kup-drawer permanent></kup-drawer>',
      markupBasic9:'<kup-drawer right permanent></kup-drawer>',

   listdata:[
      {
    "text": "slot with name tag='title' to set the title of drawer",
    "value": "1",
    "icon": "add_alert",
    "trailingIcon": true,
    "selected": false
  },
  {
    "text": "slot with name tag='subtitle' to set the subtitle of drawer",
    "value": "2",
    "selected": false,
    "icon": "ac_unit"
  },
  
  {
    "text": "a section nav with slot with tag name='maincontent' which contains the main content of the drawer, a kup-list with all the sections of the page",
    "value": "3",
    "icon": "3d_rotation",
    "selected": true
  },
  {
    "text":'kup-list with data which represent the list of sections of reachable pages, see the kup-list documentation at: <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">List</a>',
    "value": "4",
    "selected": false,
    "icon": "ac_unit"
  },

   ],
     
    

    };
  },
   methods: {
    Updrawer1: function () {
      
      const sideDrawer1 =document.getElementById("seconddrawer");
      if(!sideDrawer1.opened)
      {
        sideDrawer1.open();
      }
      
      
    }
  },
  
};
 
</script>
