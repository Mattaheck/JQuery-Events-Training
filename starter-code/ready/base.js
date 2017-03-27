/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").html('Go!') );
})

$("h1").html("Go!");

if ( $("h1").html() === "Go!" ){
  console.log( "The page says:", $("h1").html('Go!') );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
