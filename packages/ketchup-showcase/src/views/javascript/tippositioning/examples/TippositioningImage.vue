<template>
  <div>
    <br />
    <p class="test-anchor">Chip component will be anchored to the image.</p>
    <button class="test-button">Reposition!</button>
    <kup-image :src.prop="'images/arthas.jpg'"></kup-image>
  </div>
</template>

<style>
.dynamic-position {
  position: fixed;
}

.test-button {
  background: var(--main-color-lightest);
  color: var(--text-on-main-light);
  padding: 10px;
  margin-bottom: 25px;
}

kup-image {
  display: block;
}
</style>

<script>
export default {};

window.onload = function() {
  var el = document.querySelector('kup-chip');
  var elTrigger = document.querySelector('.test-button');
  positionRecalcSetup(el);
  elTrigger.addEventListener('click', fireEvent);
};

function positionRecalcSetup(el) {
  el.classList.add('dynamic-position');
}

function setPosition(el, anchorEl, margin) {
  let offsetH = el.clientHeight;
  let offsetW = el.clientWidth;
  const rect = anchorEl.getBoundingClientRect();

  if (window.innerHeight - rect.bottom < offsetH) {
    el.style.bottom = `${window.innerHeight - rect.top + margin}px`;
  } else {
    el.style.top = `${rect.bottom + margin}px`;
  }
  if (window.innerWidth - rect.left < offsetW) {
    el.style.right = `${window.innerWidth - rect.right}px`;
  } else {
    el.style.left = `${rect.left}px`;
  }
}

function fireEvent() {
  var el = document.querySelector('kup-chip');
  var elAnchor = document.querySelector('kup-image');
  setPosition(el, elAnchor, 0);
}
</script>
