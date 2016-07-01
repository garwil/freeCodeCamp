//


function getQuote() {
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
        headers: {
            "X-Mashape-Key": "O2UoUt0GF7mshLbJ2dvVULMZX8TZp1CQggYjsnGui7U7Mb0CIv"
        },
        success: function(result) {
            var parsedResult = JSON.parse(result);
			var theQuote = '"' + parsedResult.quote + '"';
			var theAuthor = "- " + parsedResult.author;
			var theTweet = "http://twitter.com/home/?status=" + theQuote + " " +theAuthor;
            $(".quote-text").text(theQuote);
            $(".quote-author").text(theAuthor);
			$(".tweet").attr("href",theTweet);
        }
    });
};

$(document).ready(function() {
    getQuote();
	$(".refresh").on('click', getQuote);
});
