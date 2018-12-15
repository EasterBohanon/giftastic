// Lets make our Variables that will set the functions of this site
var topics = ["Thunder Cats", "Justice League", "Spongebob", "Ed Edd and Eddy", "Cat and Dog", "Rugrats"];

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoons + "&api_key=AZ8V9eq9gkTx4U3YUG0dXrTIHFK2EJki&limit=10";

var userInput = $("#input-val").val().trim();



// The Function that will show our buttons
function renderButtons() {
    $("#new-buttons-here").empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.text(topics[i]);
        button.attr("term", topics[i]);
        $("#new-buttons-here").append(button);
        console.log(userInput);

    }
}

$("#input-val").on("click", function (event) {
    event.preventDefault();

    // pushing those values into the topics array
    topics.push(userInput);

    console.log(userInput);
    console.log(topics);

    // call our function
    renderButtons();


})
renderButtons();


// when buttons are clicked will show gifs

// Will pause and play image

// will show ratings

