<template>
  <div>
    <p> This family is made to be used with kup-boxes. </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> configuration:
        <br />
        <br />
        <span class="code-word">- columns[0 to n]</span>: labels (left column).
        <br />
        <span class="code-word">- cells[0 to n]</span>: values (right column).
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="text-align: left">
          <kup-card
            size-x="400px"
            size-y="200px"
            layout-family="box"
            layout-number="1"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> configuration:
        <br />
        <br />
        <span class="code-word">- columns[0 to n]</span>: labels (left column).
        <br />
        <span class="code-word">- cells[0 to n]</span>: values (right column).
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="text-align: left">
          <kup-card
            size-x="400px"
            size-y="200px"
            layout-family="box"
            layout-number="2"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 3</span> configuration:
        <br />
        <br />
        <span class="code-word">- columns[0 to n]</span>: labels.
        <br />
        <span class="code-word">- cells[0 to n]</span>: values.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="text-align: left">
          <kup-card
            size-x="400px"
            size-y="200px"
            layout-family="box"
            layout-number="3"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 4</span> configuration:
        <br />
        <br />
        <span class="code-word">- columns[0, 1]</span>: columns of the cells.
        <br />
        <span class="code-word">- cells[0, 1]</span>: the first image or icon
        cell will be used to load the image - the first string or number will be
        used as caption.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="text-align: left">
          <kup-card
            size-x="400px"
            size-y="200px"
            layout-family="box"
            layout-number="4"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBox',
  data() {
    return {
      data: {
        cell: [
          { obj: { t: '', p: '', k: 'Cell #1' }, value: 'Cell #1' },
          { obj: { t: '', p: '', k: 'Cell #2' }, value: 'Cell #2' },
          { obj: { t: '', p: '', k: 'Cell #3' }, value: 'Cell #3' },
          {
            data: { resource: 'widgets' },
            obj: { t: 'J4', p: 'ICO', k: 'widgets' },
            value: 'widgets',
          },
        ],
        columns: [
          { name: '1', title: 'Column #1' },
          { name: '2', title: 'Column #2' },
          { name: '3', title: 'Column #3' },
          { name: 'ICO', title: 'Column ICO' },
        ],
      },
    };
  },
};
</script>
