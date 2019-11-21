window.onload = function() {
  document.addEventListener('scroll', checkNav);
  document.addEventListener('resize', checkNav);
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
      listLabels[i].classList.add('active');
      return; // After the first match is found we go back, we want only one element highlighted
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
  var elements = document.querySelectorAll('.section h1');

  for (let i = 0; i < listLabels.length; i++) {
    if (event.target.textContent === listLabels[i].textContent) {
      var pos = elements[i].offsetTop;
    }
  }
  /*Time is only applicable for scrolling upwards*/
  /*pos is the y-position to scroll to (in pixels)*/
  if (isNaN(pos)) {
    throw 'Position must be a number';
  }
  if (pos < 0) {
    throw 'Position can not be negative';
  }
  var currentPos = window.scrollY || window.screenTop;
  if (currentPos < pos) {
    var t = 2;
    for (let i = currentPos; i <= pos; i += 10) {
      t += 2;
      setTimeout(function() {
        window.scrollTo(0, i);
      }, t / 2);
    }
  } else {
    var i = currentPos;
    var x;
    x = setInterval(function() {
      window.scrollTo(0, i);
      i -= 30;
      if (i <= pos) {
        clearInterval(x);
      }
    }, 2);
  }
}
