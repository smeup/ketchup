<template>
  <div>
    <p>
      Ketch.UP library includes premade templates containing sets of CSS
      variables. These sets are shipped with Ketch.UP, in order to use them you
      just have to set the theme name to the kup-theme attribute on the document
      element. You can try them yourself by clicking on the icons below.
    </p>
    <div class="demo-container">
      <div id="theme-container" class="kup-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    getThemes();
  },
  name: 'ThemingTemplates',
};

function setTheme(themeID) {
  let dom = document.documentElement;
  dom.setAttribute('kup-theme', themeID);
}

function getThemes() {
  const dom = document.documentElement;
  if (!dom.kupCurrentTheme) {
    //Waiting for kup themes initialization...
    setTimeout(getThemes, 250);
    return;
  }
  for (let key in dom.kupThemes) {
    if (key !== 'test') {
      var variables = dom.kupThemes[key].cssVariables;
      let themeContainer = document.querySelector('#theme-container');
      let themeWrapper = document.createElement('div');
      let themeImage = document.createElement('kup-image');
      let themeText = document.createElement('div');
      themeWrapper.classList.add('icon-wrapper');
      themeWrapper.classList.add('theme-wrapper');
      themeWrapper.style.backgroundColor = variables['--kup-background-color'];
      themeWrapper.style.borderColor = variables['--kup-border-color'];
      themeWrapper.id = key;
      themeWrapper.onclick = function () {
        setTheme(themeWrapper.id);
      };
      themeImage.color = variables['--kup-main-color'];
      themeImage.sizeX = '70px';
      themeImage.sizeY = '70px';
      themeImage.resource = 'widgets';
      themeText.classList.add('icon-label');
      themeText.innerText = key;
      themeText.style.color = variables['--kup-text-color'];
      themeText.style.letterSpacing = '1.5px';
      themeText.style.fontFamily = variables['--kup-font-family'];
      themeText.style.fontSize = variables['--kup-font-size'];
      themeWrapper.append(themeImage);
      themeWrapper.append(themeText);
      themeContainer.append(themeWrapper);
    }
  }
}
</script>
