console.log("It's lit!");

$('h1').html('Hello Friends')


//in vanilla javascript
document.addEventListener('DOMContentLoaded', function () {})

//append

var foods = ['apple','banana','carrot','danish','egg']

for (var i=0; i<foods.length; i++) {
  $('ul').append(`<li>${foods[i]}</li>`)
}

//<div class="foods"><ul>...</ul></div>

$('ul').wrap("<div class='foods'></div>");

//assigns a value
$('input:first').val('Hello Friends')

//event for clicking on  submit button
$('input').last().click(function () {
  console.log($('input').first().val())
})

$.getJSON('https://randomuser.me/api/?nat=US', function (data) {
  console.log(data)
})
