# Body-Scroll-of-Js

[].forEach.call(document.querySelectorAll('*'), function(el) {
  if (el.getBoundingClientRect().right > window.innerWidth) {
    console.log(el);
  }
});
