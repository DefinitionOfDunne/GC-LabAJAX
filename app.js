"use strict"

$(function() {
    $.get("https://www.reddit.com/r/aww/.json", function(req) {
            var dataChild = req.data.children;
            var randomized = dataChild[Math.floor(Math.random() * dataChild.length)];
            var title = randomized.data.title;
            var channel = randomized.data.subreddit;
            var author = randomized.data.author;
            var image = randomized.data.preview.images[0].source.url;
            $('#data-image').attr("src", image).append(image);
            $('#data-content').append(title);
            $('#data-subtitle').append(channel);
            $('#data-author').append("Posted by " + author);
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("finished");
        });

    $('#data-image').mouseenter(function(event) {
        $(this).addClass("animated pulse");
    });
    $('#data-image').mouseleave(function(event) {
        $(this).removeClass("animated pulse");
    });
});