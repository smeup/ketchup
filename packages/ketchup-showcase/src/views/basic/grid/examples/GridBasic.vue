<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The grid component receives a list of elements inside the
        <span class="code-word">data</span> prop and places them inside a grid.
      </p>
      <p>The data JSON, which is an array, has this format:</p>
      <br />
      <span class="code-word">content? : string</span>, its value will be placed
      as inner HTML of this element.
      <br />
      <span class="code-word">props? : any</span>, is an object containing all
      the props that will be spread to this element.
      <br />
      <span class="code-word">span? : number</span>, the number of columns of
      the grid this element occupies, defaults at 1.
      <br />
      <span class="code-word">tagName? : string</span>, the tag name of the
      element.
      <br />
      <br />
      <p>
        The default behavior of the grid displays rows which are made of 12
        columns on pc, 8 columns on tablet and 4 on phone. The number of the
        rows can be changed through the
        <span class="code-word">columns</span> prop and when this happens, the
        responsiveness is lost.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridBasic',
  data() {
    return {
      markupBasic: '<kup-grid></kup-grid>',
    };
  },
};
</script>
