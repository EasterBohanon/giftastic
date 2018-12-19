// Lets make our Variables that will set the functions of this site

var topics = ["Thunder Cats", "Justice League", "Spongebob", "Ed Edd and Eddy", "CatDog", "Rugrats", "Lizzy Mcguire", "Courage the Cowardly Dog", "South Park", "The Simpsons"];


var userInput = $("#input-val").val().trim();







// The Function that will show our buttons
function renderButtons() {
    $("#new-buttons-here").empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.text(topics[i]);
        button.attr("term", topics[i]).addClass("gif-buttons");
        $("#new-buttons-here").append(button);
        console.log(userInput);
        console.log(topics[i]);


    }
}

$("#submit").on("click", function (event) {

    event.preventDefault();
    userInput = $("#input-val").val().trim();
    // pushing those values into the topics array
    topics.push(userInput);

    console.log(userInput);
    console.log("TOPICS", topics);

    // call our function
    renderButtons();
    addingGifs();


})
renderButtons();


// when buttons are clicked will show gifs
function addingGifs() {
  $(".gif-buttons").on("click", function (event) {
    var cartoons = $(this).attr("term");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoons + "&api_key=AZ8V9eq9gkTx4U3YUG0dXrTIHFK2EJki&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response);
        console.log(this);

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;
            // will show ratings
            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url).addClass("actualGifs");

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-go-here").prepend(gifDiv);
        }

    });

}); 
}
addingGifs();


$(".actualGifs").on("click", function(){
    console.log("clicking on gifs", this);
});


// Will pause and play image



