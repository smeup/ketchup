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
            size-x="300px"
            size-y="200px"
            layout-family="box"
            layout-number="1"
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
        ],
        columns: [
          { name: '1', title: 'Column #1' },
          { name: '2', title: 'Column #2' },
          { name: '3', title: 'Column #3' },
        ],
      },
    };
  },
};
</script>
