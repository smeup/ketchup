const comp = document.getElementById('editor');

comp.addEventListener('kup-editor-ready', (e) => {
  console.log('Editor ready', e);
});

comp.addEventListener('kup-editor-save', (e) => {
  console.log('Editor saved', e);
});

comp.addEventListener('kup-editor-autosave', (e) => {
  console.log('Editor auto saved', e);
});

const props = {
  initialEditType: 'markdown',
  initialValue: `<p><img src="https://uicdn.toast.com/toastui/img/tui-editor-bi.png" alt="image"></p>
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
    `,
  isReadOnly: false,
  previewStyle: 'vertical',
  showSaveButton: true,
  showToolbar: true,
  //   autosaveTimer: 2000
};

if (props) {
  for (const key in props) {
    comp[key] = props[key];
  }
}
