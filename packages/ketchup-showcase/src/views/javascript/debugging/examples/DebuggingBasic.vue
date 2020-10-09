<template>
  <div>
    <p>
      Debugging in Ketch.UP is handled by the debug manager.
      <br />When the attribute <span class="code-word">kupDebug</span> on the
      document element of your app is set to true, console.log that would
      otherwise be hidden will be displayed. <br />When this attribute is
      undefined or set to false, only warnings and errors will be displayed.
      <br />
      <br />The main function is logMessage() and it accepts 3 arguments:
      <br />
      <br />
      <span class="code-word">comp</span> should be the component triggering the
      error (i.e.: kup-button) or a string (i.e.: theme-manager);
      <br />
      <span class="code-word">message</span> is the string which describes the
      error;
      <br />
      <span class="code-word">type</span> enables the logging as
      <span class="code-word">warning</span> or
      <span class="code-word">error</span>, when undefined the message will
      behave as a console.log.
    </p>
    <br />
    <div class="demo-container">
      <code class="flat">{{ codeSample }}</code>
    </div>
    <br />
    <p>
      In this page there is a chip component declared without any data. This
      triggers a warning console entry. Check it out to see the output of the
      logMessage script.
    </p>
    <kup-chip></kup-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeSample:
        'logMessage(comp: string|kupComponent, message: string, type?: string) {...}',
    };
  },
};
</script>
