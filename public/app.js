`use strict`;

function setColor(){
  let colorVal = `#${$('form')[0].color.value}`;
  $('#thebutton').css('background-color', colorVal)
}

function setRadius() {
  let radVal = `${$('form')[0].radius.value}px`;
  $('#thebutton').css('border-radius', radVal);
}

function setPhrase(){
  let phraseVal = $('form')[0].phrase.value;
  console.log(phraseVal);
  $('#thebutton').text(phraseVal);
}

// Don't forget the part where we display the code

// Page JS action can be set up here; DO THIS LAST, DAMMIT
// page('route/params', setColor, setRadius, setPhrase)

//Event listener; build this AFTER the 3 top functions
// $(form).on('change', callback...)
$('form').on('change', function(){
  setColor();
  setRadius();
  setPhrase();
})
