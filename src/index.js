import $ from 'jquery'

$(document).ready(() => {
  setTimeout(function(){fetchTopWord() }, 1000);
})

function fetchTopWord() {
  var url = "http://localhost:3000/api/v1/top_word"
  fetch(url).then(function(response) { return response.json() })
  .then(function(json) {
    var word = JSON.stringify(Object.keys(json.word)[0])
    var occurrences = JSON.stringify(Object.values(json.word)[0])
    console.log($( "word-count" ).text())
    $( "p" ).text(`${word} - found ${occurrences} times`)
    setTimeout(function(){ fetchTopWord() }, 1000);
  })
  .catch(error => console.error(error));
}

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
