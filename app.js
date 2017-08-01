"use strict"

$(function() {

    $('#page-title').addClass('animated bounceInLeft');

    $.get("https://www.reddit.com/r/aww/.json", function(req) {
            var dataChild = req.data.children;
            // dataChild.forEach(function(item) {
            //     if (item.data.preview.images[0].source.url === "undefined") {
            //         console.log(item);
            //     }
            // })
            var randomized = dataChild[Math.floor(Math.random() * dataChild.length)];
            var title = randomized.data.title;
            var channel = randomized.data.subreddit;
            var author = randomized.data.author;
            var image = randomized.data.preview.images[0].source.url;
            var comments = randomized.data.num_comments;
            var permalink = 'https://www.reddit.com' + randomized.data.permalink;
            $('#data-image').attr("src", image).append(image).on("error", function() {});
            $('#data-content').append(title);
            // $('#data-subtitle').append(channel);
            $('#data-author').append("Posted by " + author);
            $('#comments-link').attr('href', permalink);
            $('#comments').append(comments);
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

    $('#data-image, #comments').mouseenter(function(event) {
        $(this).addClass("animated pulse");
    });
    $('#data-image, #comments').mouseleave(function(event) {
        $(this).removeClass("animated pulse");
    });
});