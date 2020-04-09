$(document).ready(function () {
    var sx = screen.availWidth;
    var sy = screen.availHeight;
    $(function () {
      
        $(window).bind('load', function () {
            $('.r').each(function (i) {
                $(this).css("background-image", 'url("https://picsum.photos/' + sx + '/' + sy + '?random=' + Math.random() + '")');
                
            });
            $('.r').each(function (i) {
                $(this).css("display", 'flex');
            });
            fetcht(".a .text");
            fetcht(".b .text");
            fetcht(".c .text");
            fetcht(".d .text");
            fetcht(".e .text");
            fetcht(".f .text");
            fetcht(".g .text");
             
        });
    });
    $('.page').each(function (i, e) {
        var $this = $(this);
        $(this).click(function (event) {

            var x = event.pageX;
            var y = event.pageY;
            var nextItem = i + 1;
            var prevItem = nextItem - 3;
            if (nextItem >= $('.page').length) {
                nextItem = 0;
            }
            if (prevItem == 0 || prevItem == -1 || prevItem == -2)  {
                prevItem = prevItem + $('.page').length;
            } 

            $('.page:eq(' + nextItem + ')').css('z-index', parseInt($(this).css('z-index')) + 1);
            $('.page:eq(' + nextItem + ')').css('clip-path', 'circle(0% at ' + x + 'px ' + y + 'px)');
             $('.page:eq(' + nextItem + ')').css("-webkit-clip-path", 'circle(0% at ' + x + 'px ' + y + 'px)');
            $('.page:eq(' + prevItem + ')').css("background-image", 'url("https://picsum.photos/' + sx + '/' + sy + '?random=' + Math.random() + '")');
            var tar = '.page:eq(' + prevItem + ')'
            fetcht(tar + " .text"); 
           
            anime({
                targets: $('.page')[nextItem],
                update: function (anim) {
                    $('.page:eq(' + nextItem + ')').css('clip-path', 'circle(' + (anim.progress*2) + '% at ' + x + 'px ' + y + 'px)');
                    $('.page:eq(' + nextItem + ')').css('-webkit-clip-path', 'circle(' + (anim.progress*2) + '% at ' + x + 'px ' + y + 'px)');
                }
            }); 
        }); 
    });

    function fetcht(div) {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                $(div).html(data.text);
                console.log(data.text)
            });


    }

});