// Or with jQuery
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.section a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.section ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}