<template>
  <div>
    <div class="demo-wrapper">
      <div class="demo-container">
        <div class="kup-container" style="display: block">
          <kup-htm :data.prop="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmHtml',
  data() {
    return {
      data: {
        value:
          "<div style='font-family: Arial, sans-serif; line-height: 1.5; color: #333;'><h1 style='color: #2c3e50; margin-bottom: 10px;'>KupHtm Component Overview</h1><p style='margin-bottom: 10px;'>The <strong>KupHtm</strong> component dynamically renders content based on the type of data it receives. If the input is a URL, it embeds the page using an iFrame. If the input is raw HTML, it renders the HTML directly within the component.</p><p style='margin-bottom: 10px;'>This component is useful for embedding external pages or rendering HTML content dynamically in your application without the need for additional setup. It automatically adjusts to fit its parent container, ensuring flexibility in various layouts.</p></div>",
        obj: {
          t: '',
          p: '',
          k: '',
        },
      },
    };
  },
};
</script>
