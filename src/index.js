import $ from 'jquery'

$(document).ready(() => {
  var url = "http://localhost:3000/api/v1/top_word"
  fetch(url).then(function(response) { return response.json() })
  .then(function(json) {
    var string = JSON.stringify(json.word)
    $( "h3" ).text(`Top word from Word Watch API: ${string}`)
  })
  .catch(error => console.error(error));
})

$(function(){
  $('button').click(function() {
    var url = "http://localhost:3000/api/v1/words"
    var text = $("textarea")[0].value
    var onlyLetters = text.replace(/[^A-Za-z0-9 ]/g, '')
    var wordArray = onlyLetters.split(" ")
    wordArray.forEach(function(word) {
      postData(url, { "word": { "value": word } })
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    })
  });
});

function postData(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}
