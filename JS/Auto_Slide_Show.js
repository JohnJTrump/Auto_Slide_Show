/* $("#slideshow > div:gt(0)").hide(); // targets the slide show with JQuery
            
setInterval(function() {        // targets the slide show with JQuery
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
},3000); */
            
            
document.body.classList.add('fade-out');