<template>
  <div>
    <p>
      Ketch.UP library includes premade templates containing sets of CSS
      variables. These sets are shipped with Ketch.UP, in order to use them you
      just have to set the theme name to the kup-theme attribute on the document
      element. You can try them yourself by clicking on the icons below.
    </p>
    <div class="demo-container">
      <kup-grid id="theme-container" class="kup-container"></kup-grid>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const dom = document.documentElement;
    if (!dom.ketchup) {
      document.addEventListener('kupThemeChange', getThemes);
    } else {
      getThemes();
    }
  },
  name: 'ThemingTemplates',
};

function setTheme(themeID) {
  const dom = document.documentElement;
  dom.ketchup.theme.set(themeID);
}

function getThemes() {
  const dom = document.documentElement;
  const themeContainer = document.querySelector('#theme-container');

  let index = 0;
  for (let key in dom.ketchup.theme.list) {
    if (key !== 'test' && key !== 'showcaseDemo') {
      var variables = dom.ketchup.theme.list[key].cssVariables;
      let themeWrapper = document.createElement('div');
      let themeImage = document.createElement('kup-image');
      let themeText = document.createElement('div');
      themeWrapper.span = 2;
      themeWrapper.slot = index++;
      themeWrapper.classList.add('icon-wrapper');
      themeWrapper.classList.add('theme-wrapper');
      themeWrapper.style.backgroundColor = variables['--kup-background-color'];
      themeWrapper.style.borderColor = variables['--kup-border-color'];
      themeWrapper.id = key;
      themeWrapper.title = 'Toggle ' + key + ' theme';
      themeWrapper.onclick = function() {
        setTheme(themeWrapper.id);
      };
      themeImage.color = variables['--kup-primary-color'];
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
  themeContainer.customStyle = '';
  document.removeEventListener('kupThemeChange', getThemes);
}
</script>
