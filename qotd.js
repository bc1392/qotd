// Load QOTD & random wallpaper upon window load.
window.onload = function() {

    // Gather elements.
    const quote = $('#quote'); const author = $('#author')
    const qotd = $('#qotd');   const wrapper = $('.big-ol-wrapper')

    // Set wallpaper.
    const wallpaper = `wp${Math.floor(Math.random() * 10)}.jpeg`
    wrapper.css('background-image', `url('${wallpaper}')`)

    // GET quote from QOD.
    $.getJSON('https://quotes.rest/qod.json', function(data) {

        // Make sure QOD was successful.
        if (data.success != undefined) {

            // Populate fields with quote contents.
            quote.text(data.contents.quotes[0].quote)
            author.text('- ' + data.contents.quotes[0].author)

        } else {

            // Populate fields with proper errors.
            quote.text('An error has occured.')

        }
    })

}