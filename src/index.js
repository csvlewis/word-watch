import $ from 'jquery'

$(document).ready(() => {
  var url = "http://localhost:3000/api/v1/top_word"
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(json) {
    var string = JSON.stringify(json.word)
    var top_word = string.match(/"([^"]+)"/)[1]
    $( "h3" ).text(`Top word from Word Watch API: ${top_word}`)
  })
})
