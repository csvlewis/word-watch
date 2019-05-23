import $ from 'jquery'

$(document).ready(() => {
  var url = "http://localhost:3000/api/v1/top_word"
  fetch(url).then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log(json)
  })
})
