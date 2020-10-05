<template>
  <div>
    <div class="demo-wrapper">
      <p>
      The drawer is a very useful web component used in web pages.
      </p>
      <p>
       It allows the user to move within the various sections of the web page via a side drop-down menu.
       Basic use of the drawer looks like a side menu,
       with title and subtitle and a list of various sections in which to move.
      </p>
      <p>
      The drawer component that we have created works through the slots, so the component itself contains only the structure in which to insert
       the various parts of the drawer through the slot, such as the title, subtile, page section list.
      </p>
     <p class="centered">Sample markup</p>
      <code align=center class="flat">{{ markupBasic }}<br>{{markupBasic2}}<br>{{markupBasic3}}<br>{{markupBasic4}}<br>{{markupBasic5}}<br>{{markupBasic6}}<br>{{markupBasic7}}</code>
      <br>
      <br>
      <div>
       Passable slots to compose our drawer component are:
         <ul>
           <li>slot with name tag="title" to set the title of drawer</li>
            <li>slot with name tag="subtitle" to set the subtitle of drawer</li>
            <li>a section nav with slot with tag name='maincontent' which contains 
              the main content of the drawer, a kup-list with all the sections of the page</li>
            <li>kup-list with data which represent the list of sections of reachable pages, see the 
              kup-list documentation at: <a href="https://ketchup.smeup.com/ketchup-showcase/#/list">List</a></li>
         </ul>
            <kup-list show-icons class="handles-custom-style hydrated" :data="listdata"   display-mode="description" filter role-type="listbox" selectable ></kup-list>
       </div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic:'<kup-drawer>',
      markupBasic2:'<span slot="title">Title</span> ',
      markupBasic3:'<span slot="subtitle">subtitle</span>',
      markupBasic4:'<nav class="side-nav" slot="MainContent">',
      markupBasic5:'<kup-list show-icons class="handles-custom-style hydrated" data   display-mode="description" filter role-type="listbox" selectable ></kup-list>',
      markupBasic6:'</nav>',
      markupBasic7:'</kup-drawer>',

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
  
};
 
</script>
