console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );


})

$(document).ready(function() {
    //this calculates values automatically
    sum();
    $("#left, #right").change("keydown keyup", function() {
        sum();
    });
});

function sum() {
            var num1 = document.getElementById('left').value;
            var num2 = document.getElementById('right').value;
			var result = parseInt(num1) + parseInt(num2);

            if (!isNaN(result)) {
                document.getElementById('total').value = result;

            }
        }
