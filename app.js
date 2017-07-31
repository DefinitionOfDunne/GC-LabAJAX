"use strict"

$(function() {
    $.get("https://www.reddit.com/r/aww/.json", function(req) {
            var dataChild = req.data.children;
            var randomized = dataChild[Math.floor(Math.random() * dataChild.length)];
            console.log(randomized.data.title);
            console.log(randomized.data.subreddit);
        })
        .done(function() {
            alert("success");
        })
        .fail(function() {
            alert("error");
        })
        .always(function() {
            alert("finished");
        });
});