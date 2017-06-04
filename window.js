// Without this listener, the page (html) loads before the script loads, and then
// you don't see your data.
window.addEventListener('load', function () {
  var app = new Vue({
    el: '#app',
    data: {
      message1: 'hello, vue',
      message2: 'death by chocolate'
    }
  })
})
