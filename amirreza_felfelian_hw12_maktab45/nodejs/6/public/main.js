$(document).ready(function() {
  $("#parent").on("click",function() {
    let text = $(this).text();
    text += " click added some text! ";
    $(this).text(function () {
      return text;
    });
  })
})
console.log('hello from main');