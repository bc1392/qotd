// Load random quote upon window load.
window.onload = function() {

    // GET quote from QOD.
    $.getJSON('http://quotes.rest/qod.json', function(data) {

        // Gather elements.
        quote = $('#quote'); author = $('#author');
        qotd = $('#qotd'); body = $('body')

        // Make sure QOD was successful.
        if (data.success != undefined) {

            // Populate fields with quote contents.
            quote.text(data.contents.quotes[0].quote)
            author.text('- ' + data.contents.quotes[0].author)

            // Set new styles.
            body.css('background-image', `url('${data.contents.quotes[0].background}')`)
            qotd.removeClass('text-dark'); qotd.addClass('text-light')

        } else {

            // Populate fields with proper errors.
            quote.text('An error has occured.')

        }
    })

}