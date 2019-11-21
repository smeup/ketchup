<template>
  <div id="page-wrapper">
    <div id="page-content">
      <div class="section">
        <h1>Box</h1>
        <h3>Without data</h3>
        <kup-box></kup-box>
        <hr />
        <h3>Without layout</h3>
        <p>When no layout is defined, a default one will be used.</p>
        <kup-box :data.prop="basicData"></kup-box>
        <hr />
        <h3>3 columns</h3>
        <kup-box :data.prop="basicData" :columns.prop="3"></kup-box>
        <hr />
        <h3>Collapsible sections</h3>
        <kup-box :data.prop="basicData" :layout.prop="collapseLay"></kup-box>
      </div>

      <div class="section">
        <h1>With badges</h1>
        <h3>Images with badge</h3>
        <kup-box :data.prop="imgBadgeData"></kup-box>
        <hr />
        <h3>Box badge</h3>
        <kup-box :data.prop="boxBadgeData"></kup-box>
      </div>

      <div class="section">
        <h1>CSS classes</h1>
        <h3>no-shadow</h3>
        <kup-box :data.prop="basicData" class="no-shadow"></kup-box>
        <h3>without-padding</h3>
        <kup-box :data.prop="basicData" class="without-padding"></kup-box>
      </div>

      <div class="section">
        <h1>With filters</h1>
        <h3>Filter enabled</h3>
        <kup-box :data.prop="basicData" :filterEnabled.prop="true"></kup-box>
      </div>

      <div class="section">
        <h1>Layouts</h1>
        <h3>Horizontal</h3>
        <kup-box :data.prop="basicData" :layout.prop="horizontalLayout"></kup-box>
        <hr />
        <h3>Section size</h3>
        <kup-box :data.prop="basicData" :layout.prop="layout1"></kup-box>
        <hr />
        <h3>Layout with fixed values</h3>
        <kup-box :data.prop="basicData" :layout.prop="layout2"></kup-box>
        <hr />
        <h3>Different layout for each row</h3>
        <p>The layout can be specified in each row</p>
        <kup-box :data.prop="dataTableWithLayout"></kup-box>
        <hr />
        <h3>Section with column</h3>
        <kup-box :data.prop="basicData" :layout.prop="layout3"></kup-box>
        <h3>Section with title</h3>
        <kup-box :data.prop="basicData" :layout.prop="layout4"></kup-box>
      </div>

      <div class="section">
        <h1>With objects</h1>
        <h3>Buttons</h3>
        <kup-box :data.prop="btnData" :layout.prop="btnLayout" @kupBoxClicked="onBoxClicked"></kup-box>
        <p v-if="clickedBtn">You clicked: {{ clickedBtn }}</p>
        <hr />
        <h3>Yes/No</h3>
        <kup-box :data.prop="sinoData" :layout.prop="btnLayout"></kup-box>
        <hr />
        <h3>Radio</h3>
        <kup-box :data.prop="radioData" :layout.prop="btnLayout"></kup-box>
        <hr />
        <h3>Password</h3>
        <kup-box :data.prop="pwdData" :layout.prop="btnLayout"></kup-box>
        <hr />
        <h3>Icons</h3>
        <kup-box :data.prop="iconData" :layout.prop="btnLayout"></kup-box>
        <hr />
        <h3>Progress bar</h3>
        <kup-box :data.prop="pgbData" :layout.prop="pgbLayout"></kup-box>
      </div>

      <div class="section">
        <h1>Pagination</h1>
        <h3>Box with pagination</h3>
        <kup-box :data.prop="paginationData" pagination pageSize="10"></kup-box>
      </div>

      <div class="section">
        <h1>With row actions</h1>
        <h3>Box with row actions enabled</h3>
        <kup-box
          ref="box"
          :data.prop="basicData"
          :enableRowActions.prop="true"
          @kupRowActionMenuClicked="onRowActionMenu"
          @kupRowActionClicked="onRowAction"
        ></kup-box>
        <ul>
          <li v-if="action">{{ action }}</li>
          <li v-if="row">{{ row }}</li>
        </ul>
      </div>

      <div class="section">
        <h1>Selection</h1>
        <h3>Dynamism</h3>
        <kup-box :data.prop="basicData" @kupBoxClicked="onBoxClicked"></kup-box>
        <p v-if="clickedRow">Selected row: {{ clickedRow }}</p>
        <p v-if="clickedColumn">Selected column: {{ clickedColumn }}</p>
        <hr />
        <h3>Multi select</h3>
        <kup-box :data.prop="basicData" :multiSelection.prop="true" @kupBoxSelected="onBoxSelected"></kup-box>
        <div v-if="selectedRows && selectedRows.length > 0">
          <p>Selected rows</p>
          <ul>
            <li v-for="(row, index) in selectedRows" :key="index">{{ row }}</li>
          </ul>
        </div>
        <hr />
        <h3>SelectBox</h3>
        <p>The prop SelectBox allows to automatically select a Box</p>
        <p v-if="autoSelectedRow">Automatically selected row: {{ autoSelectedRow }}</p>
        <kup-box :data.prop="basicData" :selectBox.prop="2" @kupAutoBoxSelect="onBoxAutoSelection"></kup-box>
        <hr />
        <h3>ShowSelection</h3>
        <p>
          If the showSelection prop is false, the selected box/boxes will not be
          highlighted
        </p>
        <kup-box :data.prop="basicData" :multiSelection.prop="true" :showSelection.prop="false"></kup-box>
      </div>

      <div class="section">
        <h1>Shapes</h1>
        <h3>Basic shapes</h3>
        <p>Images and progress bars</p>
        <kup-box :data.prop="shapeData" :layout.prop="layout5"></kup-box>
      </div>

      <div class="section">
        <h1>Sort</h1>
        <h3>Sort enabled</h3>
        <kup-box :data.prop="basicData" :sortEnabled.prop="true"></kup-box>
        <h3>Sort enabled on Number</h3>
        <kup-box :data.prop="basicData" :sortEnabled.prop="true" :sortBy.prop="'FLD3'"></kup-box>
      </div>
    </div>
    <div id="page-nav">
      <div class="page-nav-list">
        <a onclick="scrollToSmoothly();" class="page-nav-element active">Box</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">With badges</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">CSS classes</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">With filters</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">Layouts</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">With objects</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">Pagination</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">With row actions</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">Selection</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">Shapes</a>
        <a onclick="scrollToSmoothly();" class="page-nav-element">Sort</a>
      </div>
    </div>
  </div>
</template>

<style>
#page-wrapper {
  display: inline-flex;
  position: relative;
  width: 100%;
}

#page-content {
  width: calc(100% - 250px);
}

.section {
  margin-bottom: 3rem;
}

#page-nav {
  padding: 15px;
  position: fixed;
  right: 0;
  top: auto;
  width: 250px;
}

.page-nav-list {
  border-left: 3px solid var(--main-color-lighter);
}

.page-nav-element {
  display: block;
  font-size: 120%;
  padding-left: 20px;
  padding-top: 7.5px;
  color: var(--main-color-lighter);
  opacity: 0.75;
  transition: all 0.2s ease-in;
}

.page-nav-element.active,
.page-nav-element:hover {
  color: var(--main-color);
  opacity: 1;
}

@media screen and (max-width: 1260px) {
  #page-wrapper {
    flex-direction: column-reverse;
  }

  #page-content {
    width: 100%;
  }

  #page-nav {
    position: relative;
    right: unset;
    top: unset;
    width: 100%;
  }

  .page-nav-list {
    border: none;
  }

  .page-nav-element {
    text-align: center;
  }
}
</style>

<script>
import { imgBadgeData, boxBadgeData, defaultData } from '@/mock/box';

export default {
  data() {
    return {
      imgBadgeData,
      boxBadgeData,
      basicData: defaultData,
      collapseLay: {
        sections: [
          {
            sections: [
              {
                style: {
                  textAlign: 'center',
                },
              },
              {
                collapsible: true,
                id: '1',
                style: {
                  textAlign: 'center',
                },
                sections: [
                  {
                    style: {
                      fontWeight: 'bold',
                    },
                  },
                  {},
                  {},
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
