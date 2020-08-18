$(document).ready(function() {
$("#form").submit(function(event) {
  event.preventDefault();
  let sentence = /[e|a|u|i|o|y|]/g;
  const wordInput = $("#word").val();
  let result = wordInput.replace(sentence, '-');
  $("#output").prepend(result);
  $("#form").hide();

})
})
