<template>
  <div>
    <p
      >This script was made to log errors in a consistent way across the
      library. The function accepts 3 arguments:
      <br />
      <br />
      <span class="code-word">comp</span> should be the name of the component
      triggering the error (i.e.: kup-button);
      <br />
      <span class="code-word">message</span> is the string which describes the
      error;
      <br />
      <span class="code-word">type</span> enables the logging as
      <span class="code-word">warning</span> or
      <span class="code-word">error</span>.</p
    >
    <br />
    <div class="demo-container">
      <code class="flat">{{ codeSample }}</code>
    </div>
    <br />
    <p
      >In this page there is a chip component declared without any data. This
      triggers an informational console entry. Check it out to see the output of
      the errorLogging script.</p
    >
    <wup-chip></wup-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeSample:
        'errorLogging(comp: string, message: string, type?: string) {...}',
    };
  },
};
</script>
