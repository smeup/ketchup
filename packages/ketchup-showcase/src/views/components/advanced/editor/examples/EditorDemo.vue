<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'EditorDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-editor-autosave',
          type: 'CustomEvent',
        },
        {
          name: 'kup-editor-ready',
          type: 'CustomEvent',
        },
        {
          name: 'kup-editor-save',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'getValueAsHTML',
          description: `Returns the component's internal value as html.`,
        },
        {
          name: 'getValueAsMarkdown',
          description: `Returns the component's internal value as markdown.`,
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'autosaveTimer',
          description:
            'When specified, the component will emit the kup-editor-save event at regular intervals.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'editorHeight',
          description: 'Sets the height of the component.',
          type: 'string',
          default: '"auto"',
          try: 'field',
        },
        {
          prop: 'initialEditType',
          description:
            'The editor type. Supported values: "markdown", "wysiwyg".',
          type: 'KupEditorType',
          default: 'markdown',
          try: 'field',
        },
        {
          prop: 'initialValue',
          description: 'The initial editor value.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'isReadOnly',
          description: 'Defines whether the editor is disabled or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'previewStyle',
          description:
            'The editor preview style. Supported values: "tab", "vertical".',
          type: 'KupEditorPreview',
          default: 'vertical',
          try: 'field',
        },
        {
          prop: 'showSaveButton',
          description: `Defines whether to show the save button in editor's toolbar or not.`,
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'showToolbar',
          description: `Defines whether to show the editor's toolbar or not.`,
          type: 'string',
          default: 'boolean',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-editor');
  comp.id = 'demo-component';

  comp.initialEditType = 'markdown';
  comp.initialValue = `<p><img src="https://uicdn.toast.com/toastui/img/tui-editor-bi.png" alt="image"></p>
    <h1>Awesome Editor!</h1>
    <p>It has been <em>released as opensource in 2018</em> and has <del>continually</del> evolved to <strong>receive 10k GitHub ⭐️ Stars</strong>.</p>
    <h2>Create Instance</h2>
    <p>You can create an instance with the following code and use <code data-backticks="1">getHtml()</code> and <code data-backticks="1">getMarkdown()</code> of the <a href="https://github.com/nhn/tui.editor">Editor</a>.</p>
    <pre class="lang-js"><code data-language="js">co

    &gt; See the table below for default options
    &gt; &gt; More API information can be found in the document

    | name | type | description |
    | --- | --- | --- |
    | el | HTMLElement | container element |

    ## Featuress

    * CommonMark + GFM Specifications
       * Live Preview
       * Scroll Sync
       * Auto Indent
       * Syntax Highlight
            1. Markdown
            2. Preview

    ## Support Wrappers

    &gt; * Wrappers
    &gt;    1. [x] React
    &gt;    2. [x] Vue
    &gt;    3. [ ] Ember&lt;p&gt;My Custom value for editor&lt;/p&gt;
    </code></pre>
    `;
  comp.isReadOnly = false;
  comp.previewStyle = 'vertical';
  comp.showSaveButton = true;
  comp.showToolbar = true;

  return comp;
}
</script>
