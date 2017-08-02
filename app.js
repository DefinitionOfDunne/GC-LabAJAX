"use strict"

$(function() {

    $.get("https://www.reddit.com/r/aww/.json", function(req) {
            var dataChild = req.data.children;

            $('#data-image').on("error", function() {
                for (var i = 0; i <= dataChild.length; i++) {
                    dataChild.splice(i, 1);
                    clearInfo();
                }
                var randomized = dataChild[Math.floor(Math.random() * dataChild.length)];

                $('#data-image').attr("src", randomized.data.preview.images[0].source.url).append(randomized.data.preview.images[0].source.url).on("error", function() {});
                $('#data-content').append(randomized.data.title);
                $('#data-author').append("Posted by " + randomized.data.author);
                $('#comments-link').attr('href', 'https://www.reddit.com' + randomized.data.permalink);
                $('#comments').append(randomized.data.num_comments);
            })
                var randomized = dataChild[Math.floor(Math.random() * dataChild.length)];

                $('#data-image').attr("src", randomized.data.preview.images[0].source.url).append(randomized.data.preview.images[0].source.url).on("error", function() {});
                $('#data-content').append(randomized.data.title);
                $('#data-author').append("Posted by " + randomized.data.author);
                $('#comments-link').attr('href', 'https://www.reddit.com' + randomized.data.permalink);
                $('#comments').append(randomized.data.num_comments);
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



    // HELPER FUNCTIONS

    function clearInfo() {
        $('#comments').empty();
        $('#data-author').empty();
        $('#data-content').empty();
    }


    // ANIMATIONS



    $('#data-image, #comments').mouseenter(function(event) {
        $(this).addClass("animated pulse");
    });
    $('#data-image, #comments').mouseleave(function(event) {
        $(this).removeClass("animated pulse");
    });
    $('#page-title').addClass('animated bounceInLeft');
});