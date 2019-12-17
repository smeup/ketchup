window.onload = function() {
  document.addEventListener('scroll', checkNav);
  document.addEventListener('resize', checkNav);
  document.addEventListener('readystatechange', checkNav);
};

function checkNav() {
  var listLabels = document.querySelectorAll('.page-nav-element');
  if (!listLabels) {
    return;
  }
  var elements = document.querySelectorAll('.section');
  var offset = document.querySelectorAll('.header')[0].clientHeight;
  for (let i = 0; i < listLabels.length; i++) {
    listLabels[i].classList.remove('active');
  }
  for (let i = 0; i < elements.length; i++) {
    if (isElementPartiallyInViewport(elements[i], offset)) {
      var lastEl = elements.length - 1;
      var currentPos = window.scrollY || window.screenTop;
      var maxPos =
        window.scrollMaxY ||
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      if (maxPos - currentPos < 10) {
        listLabels[lastEl].classList.add('active');
        return; // After the first match is found we go back, we want only one element highlighted
      } else {
        listLabels[i].classList.add('active');
        return; // After the first match is found we go back, we want only one element highlighted
      }
    }
  }
}

function isElementPartiallyInViewport(el, offset) {
  var rect = el.getBoundingClientRect();
  if (
    rect.top === 0 &&
    rect.left === 0 &&
    rect.right === 0 &&
    rect.bottom === 0 &&
    rect.height === 0 &&
    rect.width === 0 &&
    rect.x === 0 &&
    rect.y === 0
  ) {
    return false;
  }

  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  windowHeight = windowHeight - offset;

  var vertInView =
    rect.top - offset <= windowHeight && rect.top - offset + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

function scrollToSmoothly() {
  var listLabels = document.querySelectorAll('.page-nav-element');
  var elements = document.querySelectorAll('.section .nav-title');

  for (let i = 0; i < listLabels.length; i++) {
    if (event.target.textContent === listLabels[i].textContent) {
      var pos = elements[i].offsetTop;
    }
  }
  /*pos is the y-position to scroll to (in pixels)*/
  if (isNaN(pos)) {
    throw 'Position must be a number';
  }
  if (pos < 0) {
    throw 'Position can not be negative';
  }
  var currentPos = window.scrollY || window.screenTop;
  if (currentPos < pos) {
    if (pos - currentPos < 3000) {
      for (let i = currentPos; i <= pos; i += 1) {
        setTimeout(function() {
          window.scrollTo(0, i);
        }, 100);
      }
    } else {
      window.scrollTo(0, pos);
    }
  } else {
    if (currentPos - pos < 3000) {
      for (let i = currentPos; i >= pos; i -= 1) {
        setTimeout(function() {
          window.scrollTo(0, i);
        }, 100);
      }
    } else {
      window.scrollTo(0, pos);
    }
  }
}
